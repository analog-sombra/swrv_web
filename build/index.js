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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
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
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-2I3ZII4W.css";

// app/contexts/navcontext.ts
var import_react2 = require("react"), NavContext = (0, import_react2.createContext)({
  isNavOpen: !1,
  setNavOpen: (val) => {
  }
}), NavContextProvier = NavContext.Provider, NavContextConsumer = NavContext.Consumer;

// app/root.tsx
var import_react4 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let [nav, setNav] = (0, import_react4.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavContextProvier, { value: { isNavOpen: nav, setNavOpen: setNav }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/blogs/bloginfo.tsx
var bloginfo_exports = {};
__export(bloginfo_exports, {
  default: () => bloginfo_default2
});

// app/components/home/footer/footer.tsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "w-full grid place-items-center  bg-primary py-8 md:py-20 px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full md:w-4/5 lg:w-4/6 flex flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-white text-3xl font-semibold text-center md:text-left", children: "SWRV" }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 9,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "\xA9 2020 SWRV Licensing AB - All rights reserved." }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 10,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/footer/footer.tsx",
    lineNumber: 8,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grow flex justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faFacebookSquare }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 14,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 13,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faLinkedinIn }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 17,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 16,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faTwitter }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 20,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 19,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-white text-3xl p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faInstagram }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 23,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/footer/footer.tsx",
    lineNumber: 12,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grow flex md:justify-end justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "Head Office" }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 29,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-white text-md font-normal text-center md:text-left", children: "Dockplatsen 1, 211 19 Malm\xF6, Sweden" }, void 0, !1, {
      fileName: "app/components/home/footer/footer.tsx",
      lineNumber: 30,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/footer/footer.tsx",
    lineNumber: 28,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/components/home/footer/footer.tsx",
    lineNumber: 27,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/footer/footer.tsx",
  lineNumber: 7,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/home/footer/footer.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/footer/footer.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this);

// app/components/home/navbar/intronavbar.tsx
var import_react6 = require("@remix-run/react");

// app/components/home/navbar/navbar.tsx
var import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), NavBar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full grid place-items-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white w-full shadow-xl rounded-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full  flex flex-col lg:flex-row px-4 md:px-16 items-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex place-items-center rounded-xl items-end mr-6 w-60 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/images/swrvlogo.png", className: "w-32 lg:w-38 inline-block" }, void 0, !1, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 13,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 12,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Barnd" }, void 0, !1, {
      fileName: "app/components/home/navbar/navbar.tsx",
      lineNumber: 15,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 11,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:block  lg:grow" }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 17,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavLinks, {}, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 18,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden lg:block  lg:grow" }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 19,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LoginButton, {}, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 20,
    columnNumber: 25
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 10,
  columnNumber: 21
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 8,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 7,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this), NavLinks = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex text-primary font-semibold text-sm", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.NavLink, { to: "/", className: "px-2", children: "What you get" }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 33,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.NavLink, { to: "/", className: "px-2", children: "How it's work" }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 34,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.NavLink, { to: "/about", className: "px-2", children: "About" }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 35,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.NavLink, { to: "/contact", className: "px-2", children: "Contact" }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 36,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.NavLink, { to: "/blogs", className: "px-2", children: "Blogs" }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 37,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 32,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 31,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 30,
  columnNumber: 9
}, this), LoginButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid place-items-center py-4 lg:p-0 w-full lg:w-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.NavLink, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-black text-md font-normar cursor-pointer", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faRightToBracket }, void 0, !1, {
    fileName: "app/components/home/navbar/navbar.tsx",
    lineNumber: 49,
    columnNumber: 21
  }, this),
  " Login"
] }, void 0, !0, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 48,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 47,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/navbar.tsx",
  lineNumber: 46,
  columnNumber: 9
}, this);

// app/components/home/navbar/intronavbar.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), IntroNavBar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full grid place-items-center px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 flex flex-col lg:flex-row  ", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "./images/swrvlogo.png", className: "w-32 lg:w-38" }, void 0, !1, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 12,
    columnNumber: 29
  }, this) }, void 0, !1, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 11,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 10,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavLinks, {}, void 0, !1, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 15,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hidden lg:block  lg:grow" }, void 0, !1, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 16,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LoginButton, {}, void 0, !1, {
    fileName: "app/components/home/navbar/intronavbar.tsx",
    lineNumber: 17,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/navbar/intronavbar.tsx",
  lineNumber: 9,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/intronavbar.tsx",
  lineNumber: 8,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/intronavbar.tsx",
  lineNumber: 7,
  columnNumber: 9
}, this);

// app/components/utils/blogscard.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), BlogsCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-4 my-4 grid place-items-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-64 text-primary text-left font-semibold text-md my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "UPDATE" }, void 0, !1, {
      fileName: "app/components/utils/blogscard.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: props.time }, void 0, !1, {
      fileName: "app/components/utils/blogscard.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/blogscard.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-64 text-left shadow-xl rounded-xl h-72", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: props.imageUrl, alt: "err", className: "w-full" }, void 0, !1, {
      fileName: "app/components/utils/blogscard.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-md font-bold my-2 text-black p-4", children: props.title }, void 0, !1, {
      fileName: "app/components/utils/blogscard.tsx",
      lineNumber: 18,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/blogscard.tsx",
    lineNumber: 16,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/blogscard.tsx",
  lineNumber: 11,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/blogscard.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this), BigBlogCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `w-full rounded-2xl grid grid-cols-1 lg:grid-cols-2 ${props.background ?? "bg-white"} shadow-xl my-10 lg:h-80`, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: props.imageUrl, alt: "err", className: "h-80 w-full inline-block rounded-2xl" }, void 0, !1, {
    fileName: "app/components/utils/blogscard.tsx",
    lineNumber: 38,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/utils/blogscard.tsx",
    lineNumber: 37,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `${props.textColor ?? "text-black"} text-left font-semibold text-md my-2 p-4 md:p-12 grow`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "UPDAYE" }, void 0, !1, {
      fileName: "app/components/utils/blogscard.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: props.time }, void 0, !1, {
      fileName: "app/components/utils/blogscard.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-xl font-bold my-2", children: props.title }, void 0, !1, {
      fileName: "app/components/utils/blogscard.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/blogscard.tsx",
    lineNumber: 40,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/blogscard.tsx",
  lineNumber: 36,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/blogscard.tsx",
  lineNumber: 35,
  columnNumber: 9
}, this);

// app/components/blogpage/bloginfo.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), BlogsInfo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "md:h-[550px] w-full relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "./images/blogs/bloginfo.png", alt: "error", className: "h-full w-full rounded-lg inline-block relative" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full mx-auto absolute bottom-0 hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto  pt-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-white text-2xl font-semibold md:w-96", children: "Three AAPI founders building apps on the App Store that cultivate community" }, void 0, !1, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 12,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md font-semibold text-white py-10", children: "Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators" }, void 0, !1, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 15,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 11,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 10,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blogpage/bloginfo.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-primary text-2xl font-semibold md:w-96 sm:hidden", children: "Three AAPI founders building apps on the App Store that cultivate community" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md font-semibold text-primary py-10 md:hidden", children: "Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md font-semibold text-primary", children: "App creators Dawoon Kang of Coffee Meets Bagel, Annie Vang of HmongPhrases, and Larry Liu of Weee! are bringing people together, finding innovative solutions, and forging their own paths." }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 30,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md font-normal text-primary mt-10", children: "AppMany of today\u2019s most impactful creators are combining the power of technology with their personal experiences to offer valuable spaces for users to learn, share, and connect on the App Store. When Larry Liu first immigrated to the U.S., he realised there wasn\u2019t an easy way for the Asian community to buy the goods needed to make some of their favorite dishes. Wanting to provide a place to celebrate and bring widespread access to Asian and Hispanic food, he turned to the App Store to launch grocery delivery app Weee! People would no longer have to be limited to the small \u201Cethnic\u201D aisle at mainstream grocery stores. As big advocates for human connection, Dawoon Kang and her twin sister Arum teamed up to found Coffee Meets Bagel, a dating app with an intentionally \u201Cslower\u201D approach. Their algorithm focuses not on getting users the most likes, but on guiding them toward meaningful conversations. As one of the most popular dating apps, Coffee Meets Bagel has facilitated over 150 million matches to date." }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 33,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md font-normal text-primary mt-10", children: "Annie Vang, a participant of Apple Entrepreneur Camp in 2021, created HmongPhrases to help preserve the Hmong dialect for future generations. Though the Hmong population has been in the U.S. for over 40 years, it is widely considered one of the most marginalised Asian groups. Her app allows users to search for a phrase in Hmong, hear what it sounds like, and then practice saying it out loud. As a true labor of love, not only does Annie do the coding for the app herself \u2014 she even records the phrases in her own voice. Liu, Kang, and Vang discuss how they used technology to transform their ideas into powerful platforms, how their apps uplift their communities, and how they influence positive change." }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blogpage/bloginfo.tsx",
    lineNumber: 23,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Top picks" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 42,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 43,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "May 26, 2022", imageUrl: "./images/blogs/blog4.png" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 44,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "May 26, 2022", imageUrl: "./images/blogs/blog5.png" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 45,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blogpage/bloginfo.tsx",
    lineNumber: 41,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/blogpage/bloginfo.tsx",
    lineNumber: 40,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Related article" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }, void 0, !1, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }, void 0, !1, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 54,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }, void 0, !1, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 55,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" }, void 0, !1, {
        fileName: "app/components/blogpage/bloginfo.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blogpage/bloginfo.tsx",
      lineNumber: 52,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blogpage/bloginfo.tsx",
    lineNumber: 49,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/blogpage/bloginfo.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/blogpage/bloginfo.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this), bloginfo_default = BlogsInfo;

// app/routes/blogs/bloginfo.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), blogs = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IntroNavBar, {}, void 0, !1, {
    fileName: "app/routes/blogs/bloginfo.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(bloginfo_default, {}, void 0, !1, {
    fileName: "app/routes/blogs/bloginfo.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Footer, {}, void 0, !1, {
    fileName: "app/routes/blogs/bloginfo.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/blogs/bloginfo.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this), bloginfo_default2 = blogs;

// app/routes/blogs/index.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => blogs_default
});

// app/components/blogpage/blogspage.tsx
var import_react_fontawesome3 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), BlogsIntro = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full px-6 sm:px-16 relative", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: " absolute w-full h-screen box-border left-0 px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: " bg-[#EFEFEF] box-border w-full h-screen rounded-xl" }, void 0, !1, {
    fileName: "app/components/blogpage/blogspage.tsx",
    lineNumber: 10,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/blogpage/blogspage.tsx",
    lineNumber: 9,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 relative pt-8 px-6 mdLpx-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "May 26, 2022", imageUrl: "./images/blogs/blog4.png" }, void 0, !1, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "May 26, 2022", imageUrl: "./images/blogs/blog5.png" }, void 0, !1, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center mt-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 18,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 19,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 20,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog9.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 21,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 22,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog8.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 23,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 16,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BigBlogCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "./images/blogs/blog6.png", textColor: "text-white" }, void 0, !1, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BigBlogCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", background: "bg-[#ADADAD]", time: "May 26, 2022", imageUrl: "./images/blogs/blog7.png", textColor: "text-white" }, void 0, !1, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center my-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog10.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 34,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog9.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 35,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog8.png" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 37,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 30,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid place-items-center my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faChevronLeft }, void 0, !1, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 42,
          columnNumber: 134
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 42,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-primary text-md font-normal grid place-items-center mx-10", children: "1  of 20" }, void 0, !1, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 43,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faChevronRight }, void 0, !1, {
          fileName: "app/components/blogpage/blogspage.tsx",
          lineNumber: 44,
          columnNumber: 134
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/blogpage/blogspage.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 41,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/blogpage/blogspage.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blogpage/blogspage.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/blogpage/blogspage.tsx",
  lineNumber: 8,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/blogpage/blogspage.tsx",
  lineNumber: 7,
  columnNumber: 9
}, this), blogspage_default = BlogsIntro;

// app/routes/blogs/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), blogs2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IntroNavBar, {}, void 0, !1, {
    fileName: "app/routes/blogs/index.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(blogspage_default, {}, void 0, !1, {
    fileName: "app/routes/blogs/index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Footer, {}, void 0, !1, {
    fileName: "app/routes/blogs/index.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/blogs/index.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), blogs_default = blogs2;

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  default: () => register_default
});

// app/components/user/register.tsx
var import_react7 = require("@remix-run/react");

// app/components/utils/buttont.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), CusButton = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { onClick: () => {
  props.func != null && props.func();
}, className: `text-center py-2 ${props.margin ?? "my-3"} rounded-lg font-normal ${props.background ?? "bg-primary"} ${props.textColor ?? "text-white"} ${props.textSize ?? "text-md"} ${props.width ?? "w-44"} ${props.background ?? "bg-transparent"} ${props.border ?? "border-2"} ${props.borderColor ?? "border-transparent"} ${props.extra ?? ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: `${props.fontwidth ?? "font-normal"}`, children: props.text }, void 0, !1, {
  fileName: "app/components/utils/buttont.tsx",
  lineNumber: 25,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/buttont.tsx",
  lineNumber: 24,
  columnNumber: 9
}, this);

// app/components/user/register.tsx
var import_react8 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), RegisterBox = () => {
  let [isBrand, setBrand] = (0, import_react8.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "hidden flex-col lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grow" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grow" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 14,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "./images/avatar/login.png", alt: "err", className: "justify-self-end w-[250px] h-[400px]" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 13,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full", onClick: () => {
          setBrand(!1);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CusButton, { width: "w-full", text: "Influencer", background: `${isBrand ? "" : "bg-secondary"}`, textColor: `${isBrand ? "text-primary" : "text-white"}`, borderColor: `${isBrand ? "border-primary" : ""}`, fontwidth: "font-bold" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 24,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 21,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-10" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full", onClick: () => {
          setBrand(!0);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CusButton, { width: "w-full", text: "Brand", textColor: `${isBrand ? "text-white" : "text-primary"}`, background: `${isBrand ? "bg-secondary" : ""}`, borderColor: `${isBrand ? "" : "border-primary"}`, fontwidth: "font-bold" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 30,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 20,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Join" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 34,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Confirm password" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid place-items-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex content-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 44,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 43,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "./images/icons/apple.png", alt: "error", className: "w-10 h-10" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 46,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 47,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Link, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CusButton, { text: "create account", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 51,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex gap-4 content-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "checkbox", name: "check1" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 55,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "text-left text-[10px] text-black font-normal", children: "I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex gap-4 mt-4 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "checkbox", name: "check2" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-left text-[10px] text-black font-normal", children: "Also, I confirm I am of eligible age" }, void 0, !1, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 63,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-8", children: [
        "I\u2019m already registered.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Link, { to: "/login", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "font-bold", children: " Let me Log in" }, void 0, !1, {
            fileName: "app/components/user/register.tsx",
            lineNumber: 65,
            columnNumber: 126
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/user/register.tsx",
          lineNumber: 65,
          columnNumber: 105
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/register.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "hidden lg:block" }, void 0, !1, {
      fileName: "app/components/user/register.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/user/register.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// app/routes/register.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), register = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(NavBar, {}, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(RegisterBox, {}, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/register.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this), register_default = register;

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default2
});

// app/components/contact/contact.tsx
var import_react_fontawesome4 = require("@fortawesome/react-fontawesome");

// app/components/utils/downloadapp.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), DownloadApp = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-[#0000004C]  rounded-xl flex mt-8 p-6 flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-white text-4xl font-bold", children: [
      "Join the largest ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/utils/downloadapp.tsx",
        lineNumber: 8,
        columnNumber: 84
      }, this),
      " influencer network"
    ] }, void 0, !0, {
      fileName: "app/components/utils/downloadapp.tsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "text-white text-md font-normal mt-4", children: "Instant access to top influencers" }, void 0, !1, {
      fileName: "app/components/utils/downloadapp.tsx",
      lineNumber: 9,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/downloadapp.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grow" }, void 0, !1, {
    fileName: "app/components/utils/downloadapp.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CusButton, { text: "Download Our app", background: "bg-secondary" }, void 0, !1, {
    fileName: "app/components/utils/downloadapp.tsx",
    lineNumber: 14,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/components/utils/downloadapp.tsx",
    lineNumber: 13,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/utils/downloadapp.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/downloadapp.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/downloadapp.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this);

// app/components/contact/contact.tsx
var import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), ContactPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full px-6 sm:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bg-[#EFEFEF] rounded-2xl sm:p-0 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10 ", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "text-5xl font-bold text-primary flex", children: "Love to hear from you" }, void 0, !1, {
    fileName: "app/components/contact/contact.tsx",
    lineNumber: 16,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "text-5xl  font-bold text-primary flex", children: [
    "Get in touch ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: "./images/icons/hand.png", alt: "error" }, void 0, !1, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 20,
      columnNumber: 38
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/contact/contact.tsx",
    lineNumber: 19,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex gap-4 flex-col lg:flex-row items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: " w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faLocationDot }, void 0, !1, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 24,
        columnNumber: 125
      }, this),
      " 102 street 2712 Don"
    ] }, void 0, !0, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 24,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faPhone }, void 0, !1, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 25,
        columnNumber: 124
      }, this),
      " 102 street 2712 Don"
    ] }, void 0, !0, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 25,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faMailBulk }, void 0, !1, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 26,
        columnNumber: 124
      }, this),
      " 102 street 2712 Don"
    ] }, void 0, !0, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 26,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/contact/contact.tsx",
    lineNumber: 23,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bg-white p-6 rounded-2xl my-10 shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CusButton, { text: "I'am a brand", textColor: "text-black", borderColor: "b-gray-600" }, void 0, !1, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 31,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-10" }, void 0, !1, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 32,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CusButton, { text: "I'am a Influencer", background: "bg-secondary" }, void 0, !1, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 33,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 30,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Your Name" }, void 0, !1, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 37,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "text", className: "outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2", placeholder: "Enter your name" }, void 0, !1, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 40,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 36,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-10" }, void 0, !1, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 42,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Phone" }, void 0, !1, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 44,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "text", className: "outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2", placeholder: "Enter your phone number" }, void 0, !1, {
          fileName: "app/components/contact/contact.tsx",
          lineNumber: 47,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/contact/contact.tsx",
        lineNumber: 43,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 35,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-left text-md font-semibold text-primary py-2", children: "Message" }, void 0, !1, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 50,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("textarea", { className: "p-4 w-full h-60 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none", placeholder: "your message" }, void 0, !1, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 53,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CusButton, { text: "Send Message", background: "bg-primary" }, void 0, !1, {
      fileName: "app/components/contact/contact.tsx",
      lineNumber: 55,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/contact/contact.tsx",
    lineNumber: 29,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DownloadApp, {}, void 0, !1, {
    fileName: "app/components/contact/contact.tsx",
    lineNumber: 58,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/contact/contact.tsx",
  lineNumber: 14,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/contact/contact.tsx",
  lineNumber: 11,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/contact/contact.tsx",
  lineNumber: 9,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/contact/contact.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), contact_default = ContactPage;

// app/routes/contact.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), contact = () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(IntroNavBar, {}, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(contact_default, {}, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Footer, {}, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/contact.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this), contact_default2 = contact;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default2
});

// app/components/utils/teamcard.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), TeamCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-64 text-left shadow-xl rounded-xl pb-4 m-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { src: props.imageUrl, alt: "err", className: "w-full" }, void 0, !1, {
    fileName: "app/components/utils/teamcard.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-xl font-bold text-primary text-center mt-2", children: props.name }, void 0, !1, {
    fileName: "app/components/utils/teamcard.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-md font-semibold text-primary text-center", children: props.position }, void 0, !1, {
    fileName: "app/components/utils/teamcard.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/teamcard.tsx",
  lineNumber: 11,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/teamcard.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this);

// app/components/about/about.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), AboutPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  md:py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "About SWRV influencer platform" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 10,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-md font-semibold text-primary mt-6", children: "Founded in 2016, SWRV is a private media company based in Copenhagen, Denmark. The company specializes in producing how-to guides, courses and research reports in the social media and influencer marketing industry. The firm is home to one of the world's largest community of influencers and works with leading brands to leverage the power of influencer marketing with over 5 million monthly unique users." }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 11,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/about/about.tsx",
    lineNumber: 9,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/about/about.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "./images/inf/inf8.png", alt: "error" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 19,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 18,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex gap-2 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "./images/inf/inf14.png", alt: "error" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 23,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 22,
        columnNumber: 25
      }, this),
      "  ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "./images/inf/inf13.png", alt: "error" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 25,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 24,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "./images/inf/inf12.png", alt: "error" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 29,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 28,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex gap-2 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "./images/inf/inf11.png", alt: "error" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 34,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this),
      "  ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "./images/inf/inf10.png", alt: "error" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 36,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 35,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "./images/inf/inf9.png", alt: "error" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 40,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 39,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/about/about.tsx",
    lineNumber: 17,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "We assist the influencer marketing sector in" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 46,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-secondary text-3xl font-bold", children: "becoming more efficient." }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 47,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-md font-normal text-gray-600 mt-10", children: [
      "SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 292
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 298
      }, this),
      "United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 502
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 508
      }, this),
      "SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 746
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 752
      }, this),
      "We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 992
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 50,
        columnNumber: 998
      }, this),
      " SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018."
    ] }, void 0, !0, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 49,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/about/about.tsx",
    lineNumber: 45,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bg-[#0000004C] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-white text-3xl font-bold", children: "Mission Statement:" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 58,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-md font-semibold text-white mt-4", children: "SWRV aims to provide the most comprehensive reviews of marketing software and services globally, enabling brands and marketing decision makers to make smarter decisions around their marketing stack." }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 60,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/about/about.tsx",
    lineNumber: 56,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/about/about.tsx",
    lineNumber: 55,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "The Core Team" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 68,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "h-[1px] bg-gray-600 w-full my-2" }, void 0, !1, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 69,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center place-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TeamCard, { name: "Werner Geyser", position: "Founder", imageUrl: "./images/team/team1.png" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 71,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TeamCard, { name: "Yaroslav Siryk", position: "CTO", imageUrl: "./images/team/team2.png" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TeamCard, { name: "Anne Vest", position: "COO", imageUrl: "./images/team/team6.png" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 73,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TeamCard, { name: "Sasha Bondarenko", position: "Growth Marketing", imageUrl: "./images/team/team5.png" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 74,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TeamCard, { name: "Djordje Pajkanovic", position: "UX/UI Designer", imageUrl: "./images/team/team4.png" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 75,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(TeamCard, { name: "Sasha Bondarenko", position: "General Manager", imageUrl: "./images/team/team3.png" }, void 0, !1, {
        fileName: "app/components/about/about.tsx",
        lineNumber: 76,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/about/about.tsx",
      lineNumber: 70,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/about/about.tsx",
    lineNumber: 67,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/about/about.tsx",
  lineNumber: 7,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/about/about.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this), about_default = AboutPage;

// app/routes/about.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), about = () => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(IntroNavBar, {}, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(about_default, {}, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Footer, {}, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/about.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this), about_default2 = about;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});

// app/components/utils/markatingcard.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), MarkatingCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: `h-full w-38 text-left text-gray-600 p-4 ${props.leftBorder ? "border-l-2 border-gray-400" : ""}`, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { src: props.imageUrl, alt: "err" }, void 0, !1, {
    fileName: "app/components/utils/markatingcard.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "text-xl font-bold my-4", children: props.title }, void 0, !1, {
    fileName: "app/components/utils/markatingcard.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-md font-normal", children: props.description }, void 0, !1, {
    fileName: "app/components/utils/markatingcard.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/markatingcard.tsx",
  lineNumber: 12,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/markatingcard.tsx",
  lineNumber: 11,
  columnNumber: 9
}, this);

// app/components/utils/categorycard.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), CategoryCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "w-40 text-left text-gray-600 p-3 border-2 border-gray-400 shadow-md rounded-xl my-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: props.imageUrl, alt: "err" }, void 0, !1, {
    fileName: "app/components/utils/categorycard.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "text-xl font-bold my-2 text-primary", children: props.title }, void 0, !1, {
    fileName: "app/components/utils/categorycard.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-sm font-normal", children: props.description }, void 0, !1, {
    fileName: "app/components/utils/categorycard.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/categorycard.tsx",
  lineNumber: 11,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/categorycard.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this);

// app/components/homepage/homeintro.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), HomeIntro = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full px-6 sm:px-16", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(HomeFirst, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 13,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(RelatatinoAndTrust, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 15,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Market, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Marketing, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 18,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(PowerfullInf, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ExploreCategory, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(JoinSwrv, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Blogs, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), RelatatinoAndTrust = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto lg:my-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "We strengthen relationships between" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-secondary text-3xl font-bold", children: "brands and creatives." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-black text-md font-normal", children: "Our mission is to Make Waves, which stems from the fact that our creators tell stories that foster human relationships and generate waves of influence. These waves of influence create our data layers, and we use them to calculate the impact. Our clients and creators make a splash, and we track the results." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 36,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Trusted by" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "h-[1px] bg-black w-full my-2" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 44,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 42,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full grid palce-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-5xl text-center text-gray-600 gap-x-5 mb-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "OGILVY" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 48,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "McDonald's" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "Shelter" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 54,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "Playtika" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 57,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "Starbucks" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 60,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 59,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 46,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 35,
  columnNumber: 9
}, this), HomeFirst = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "relative", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "absolute h-[450px] md:h-[550px] lg:h-[700px] w-full inline-block mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "h-full w-full bg-primary rounded-xl" }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 72,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 71,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full px-5 md:p-0 md:w-3/5 lg:w-4/6 relative mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "pt-10 md:pt-24", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-white text-5xl font-bold", children: "Reach the next billion" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 77,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-white text-md font-normal mt-4", children: "We connect brands with targeted audience through nano influencer marketing. Save time and improve performance. Take the guesswork out of Influencer analysis with data-driven audience insights, managed in one easy to use platform." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 78,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CusButton, { text: "I'am a brand", borderColor: "border-white" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 80,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-10" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 81,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CusButton, { text: "I'am a Influencer", background: "bg-secondary" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 82,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 79,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 76,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 75,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "absolute w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "px-2 sm:px-20 mx-auto grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/mast_group.svg", alt: "error", className: "w-[1200px] mx-auto" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 90,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 89,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 88,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 py-20 relative mx-auto grid place-content-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex  gap-4 px-6 md:p-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf4.png", alt: "error" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 96,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 95,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col  gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex  gap-4 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf2.png", alt: "error" }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 101,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 100,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf6.png", alt: "error" }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 104,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 103,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf5.png", alt: "error" }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 107,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 106,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/homepage/homeintro.tsx",
          lineNumber: 99,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf7.png", alt: "error" }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 112,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 111,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf3.png", alt: "error" }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 115,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 114,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf1.png", alt: "error" }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 118,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/homepage/homeintro.tsx",
            lineNumber: 117,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/homepage/homeintro.tsx",
          lineNumber: 110,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 98,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 94,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 93,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 87,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 70,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 69,
  columnNumber: 9
}, this), Market = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full bg-[#EFEFEF]  rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mx-auto py-4 w-full md:w-3/5 lg:w-4/6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full  mx-auto my-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: [
      "An entire ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-secondary", children: "marketing platform" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 137,
        columnNumber: 83
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 137,
        columnNumber: 141
      }, this),
      " for influencers"
    ] }, void 0, !0, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 137,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-black text-md font-normal", children: "All of the campaign's steps are smoothly integrated into a single user experience." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 138,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 136,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:place-items-center my-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(MarkatingCard, { imageUrl: "./images/icons/icon1.png", title: "Make a campaign", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease.", leftBorder: !0 }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 141,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(MarkatingCard, { imageUrl: "./images/icons/icon5.png", title: "Look for influencers.", description: "Access a vast influencer database. It's simple to locate influencers thanks to advanced search criteria.", leftBorder: !0 }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 142,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(MarkatingCard, { imageUrl: "./images/icons/icon4.png", title: "Statistics", description: "Real-time campaign performance analysis and sharing", leftBorder: !0 }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 143,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(MarkatingCard, { imageUrl: "./images/icons/icon3.png", title: "Communication", description: "For quick and easy connection with your influencers, there's an integrated chat option and a notification centre.", leftBorder: !0 }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 144,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(MarkatingCard, { imageUrl: "./images/icons/icon2.png", title: "Payments", description: "Easily and securely manage payments from buyers to influencers.", leftBorder: !0 }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 145,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 140,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 135,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 134,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 133,
  columnNumber: 9
}, this), PowerfullInf = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full my-10 bg-[#0000004C] py-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " w-full md:w-3/5 lg:w-4/6 mx-auto md:p-0 p-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-white text-4xl font-bold", children: [
    "ARE YOU A POWERFUL",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 158,
      columnNumber: 85
    }, this),
    " INFLUENCER?"
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 158,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-white text-md font-normal mt-4", children: "Stop looking for the ideal marketplace to join and simply join all of them." }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 159,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CusButton, { text: "Join Now", background: "bg-secondary" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 161,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-10" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 162,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CusButton, { text: "Read More", borderColor: "border-white" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 163,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 160,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 157,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 156,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 155,
  columnNumber: 9
}, this), Marketing = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " py-4 w-full md:w-3/5 lg:w-4/6   mx-auto", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-primary text-4xl font-bold", children: "We assist the influencer marketing sector in" }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 177,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-secondary text-4xl font-bold", children: "becoming more efficient." }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 178,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-gray-500 text-md font-normal mt-4", children: [
    "SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 179,
      columnNumber: 343
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 179,
      columnNumber: 349
    }, this),
    "United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date. ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 179,
      columnNumber: 554
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 179,
      columnNumber: 560
    }, this),
    "SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 179,
      columnNumber: 798
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 179,
      columnNumber: 804
    }, this),
    "We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea. SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018."
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 179,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(DownloadApp, {}, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 181,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 176,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 175,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 174,
  columnNumber: 9
}, this), ExploreCategory = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Explore by category" }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 192,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 191,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid place-items-center grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 my-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/education.png", title: "Education", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 196,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/food.png", title: "Food", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 197,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/photography.png", title: "Photography", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 198,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/travel.png", title: "Travel", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 199,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/motivation.png", title: "Motivation", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 200,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/beauty.png", title: "Beauty", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 201,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/automotive.png", title: "Automotive", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 202,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CategoryCard, { imageUrl: "./images/icons/health.png", title: "Health", description: "Make briefs, invite influencers, negotiate, and manage your campaigns with ease." }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 203,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 195,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 190,
  columnNumber: 9
}, this), JoinSwrv = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-primary text-3xl font-bold", children: "Join SWRV" }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 213,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-gray-600 text-md font-normal", children: "There are no commissions or membership costs for brands or buyer agencies." }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 214,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 place-items-center my-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-60 h-40 m-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf2.png", className: "w-full h-full" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 217,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 216,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-60 h-40  m-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf3.png", className: "w-full h-full" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 220,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 219,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-60 h-40 hidden lg:block  m-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "./images/inf/inf4.png", className: "w-full h-full" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 223,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 222,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 215,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-gray-600 text-lg font-semibold", children: "SWRV market" }, void 0, !1, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 226,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-gray-500 text-md font-normal", children: [
    "SWRV Market is SWRV's entire influencer marketing soluction. The whole campaign flow - discorvery. activation, tracking, payouts, and more - is supported by our influencer marketing platform. Users have access to complete automation and a transaction-base business model that is avaliable to any brand or purchasing agency for free.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 227,
      columnNumber: 399
    }, this),
    "SWRV is a free assistance programme that may help you grow faster and get a competitver advantage."
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 227,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 212,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 211,
  columnNumber: 9
}, this), Blogs = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-primary text-3xl font-bold grid place-items-center", children: "Blogs" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 240,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grow" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 241,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(CusButton, { text: "Read More", textColor: "text-primary", borderColor: "border-secondary" }, void 0, !1, {
        fileName: "app/components/homepage/homeintro.tsx",
        lineNumber: 242,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 239,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "h-[1px] bg-black w-full my-2" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 244,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 238,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "grid place-items-center gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 items-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(BlogsCard, { title: "App Store stopped nearly $1.5 billion in fraudulent transactions in 2021", time: "June 1, 2022", imageUrl: "./images/blogs/blog5.png" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 248,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(BlogsCard, { title: "Swupnil Sahai and his co\u2011founder serve an ace with AI\u2011powered SwingVision", time: "June 1, 2022", imageUrl: "./images/blogs/blog4.png" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 249,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(BlogsCard, { title: "New report highlights global success of small businesses and entrepreneurs on the App Store", time: "June 1, 2022", imageUrl: "./images/blogs/blog3.png" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 250,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(BlogsCard, { title: "Three AAPI founders building apps on the App Store that cultivate community", time: "June 1, 2022", imageUrl: "./images/blogs/blog2.png" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 251,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(BlogsCard, { title: "From farm to sea: Conserving mangroves to protect local livelihoods and the planet", time: "June 1, 2022", imageUrl: "./images/blogs/blog1.png" }, void 0, !1, {
      fileName: "app/components/homepage/homeintro.tsx",
      lineNumber: 252,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/homepage/homeintro.tsx",
    lineNumber: 247,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/homepage/homeintro.tsx",
  lineNumber: 237,
  columnNumber: 9
}, this);

// app/routes/index.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), index = () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(IntroNavBar, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(HomeIntro, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Footer, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/index.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this), routes_default = index;

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => login_default
});

// app/components/home/footer/mainfooter.tsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), MainFooter = () => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full flex py-6 px-8", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grow" }, void 0, !1, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react9.Link, { to: "/about", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "About" }, void 0, !1, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 9,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react9.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }, void 0, !1, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 10,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react9.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }, void 0, !1, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 11,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react9.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Cookie policy" }, void 0, !1, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 12,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react9.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "FAQ" }, void 0, !1, {
      fileName: "app/components/home/footer/mainfooter.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/footer/mainfooter.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/footer/mainfooter.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/footer/mainfooter.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this);

// app/components/user/login.tsx
var import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), LoginBox = () => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " text-center text-[70px] -translate-y-4 font-black text-stroke text-white absolute top-0 w-full md:-translate-y-10 md:text-[150px]", children: "Welcome" }, void 0, !1, {
    fileName: "app/components/user/login.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "hidden lg:flex" }, void 0, !1, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 10,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl py-6 px-10 relative mt-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-black text-left font-bold text-lg mt-4", children: "Login" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 13,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-black text-left font-normal text-lg", children: "Email" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 14,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "example@mail.com" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 15,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Password" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 16,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "8 character" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 17,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid place-items-center py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex content-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  allign-center", children: "Login with" }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 22,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 21,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("img", { src: "./images/icons/apple.png", alt: "error", className: "w-10 h-10" }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 24,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("img", { src: "./images/icons/google.png", alt: "error", className: "w-10 h-10" }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 25,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 20,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 19,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react10.Link, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CusButton, { text: "Login", textColor: "text-white", background: "bg-secondary", fontwidth: "font-bold", width: "w-full" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 29,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 28,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-2 mt-4 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "checkbox", name: "check1" }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 34,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 33,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-left text-xs text-black font-normal", children: "Keep me logged in" }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 38,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 36,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-black text-left font-normal text-sm", children: [
        "CAN'T LOG IN? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "font-bold", children: "RESTORE PASSWORD" }, void 0, !1, {
          fileName: "app/components/user/login.tsx",
          lineNumber: 41,
          columnNumber: 95
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 41,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-black text-left font-bold text-sm mt-6", children: "Don't have an account?" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react10.Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CusButton, { text: "Join", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold", width: "w-full" }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/user/login.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 12,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "hidden lg:block" }, void 0, !1, {
      fileName: "app/components/user/login.tsx",
      lineNumber: 47,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user/login.tsx",
    lineNumber: 9,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/user/login.tsx",
  lineNumber: 7,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/user/login.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this);

// app/routes/login.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), login = () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex flex-col h-screen", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(NavBar, {}, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 9,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(LoginBox, {}, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grow" }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(MainFooter, {}, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/login.tsx",
  lineNumber: 8,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/login.tsx",
  lineNumber: 7,
  columnNumber: 9
}, this), login_default = login;

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => home_default
});
var import_react14 = require("@remix-run/react"), import_react15 = require("react");

// app/components/home/footer/homefooter.tsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), HomeFooter = () => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-full flex py-6 px-8 flex-col md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react11.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "\xA9 2020 SWRV Licensing AB - All rights reserved." }, void 0, !1, {
    fileName: "app/components/home/footer/homefooter.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "grow" }, void 0, !1, {
    fileName: "app/components/home/footer/homefooter.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex justify-center my-2 md:my-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react11.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Terms of use" }, void 0, !1, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 10,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react11.Link, { to: "/", className: "text-sm text-gray-600 text-center px-4 font-normal", children: "Privacy policy" }, void 0, !1, {
      fileName: "app/components/home/footer/homefooter.tsx",
      lineNumber: 11,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/footer/homefooter.tsx",
    lineNumber: 9,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/footer/homefooter.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/footer/homefooter.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this);

// app/components/home/navbar/mainnavbar.tsx
var import_react12 = require("@remix-run/react"), import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome5 = require("@fortawesome/react-fontawesome"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), MainNavBar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w-full grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "bg-white w-full shadow-xl rounded-2xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w-full  flex flex-col lg:flex-row px-2 items-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex place-items-center rounded-xl items-end mr-6 w-60 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react12.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("img", { src: "/images/swrvlogo.png", className: "w-32 lg:w-38 inline-block rounded-lg" }, void 0, !1, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 14,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 13,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: "Barnd" }, void 0, !1, {
      fileName: "app/components/home/navbar/mainnavbar.tsx",
      lineNumber: 16,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 12,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grow" }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 18,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(MainNavRight, {}, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 19,
    columnNumber: 25
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/navbar/mainnavbar.tsx",
  lineNumber: 11,
  columnNumber: 21
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/mainnavbar.tsx",
  lineNumber: 10,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/mainnavbar.tsx",
  lineNumber: 9,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/mainnavbar.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this), MainNavRight = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "md:flex hidden", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faBell }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 32,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 31,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "h-8 mx-4 bg-primary w-[2px]", children: " " }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 34,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-center text-xs text-black font-normal", children: "ivankbfc@gmail.com" }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 37,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 36,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("img", { src: "/images/inf/inf6.png", alt: "error", className: "w-10 h-10 rounded object-cover" }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 40,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/home/navbar/mainnavbar.tsx",
    lineNumber: 39,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/navbar/mainnavbar.tsx",
  lineNumber: 30,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/navbar/mainnavbar.tsx",
  lineNumber: 29,
  columnNumber: 9
}, this);

// app/components/home/sidebar/sidebar.tsx
var import_free_brands_svg_icons2 = require("@fortawesome/free-brands-svg-icons"), import_free_solid_svg_icons5 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome6 = require("@fortawesome/react-fontawesome"), import_react13 = require("react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), SideBar = () => {
  let nav = (0, import_react13.useContext)(NavContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: ` ${nav != null && nav.isNavOpen ? "w-60" : "w-20"} h-screen p-2 fixed top-0 left-0 md:block hidden`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w-full h-full bg-primary rounded-2xl flex flex-col items-center py-8 px-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { onClick: () => {
      nav == null || nav.setNavOpen(!nav.isNavOpen);
    }, className: "w-full flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grow" }, void 0, !1, {
        fileName: "app/components/home/sidebar/sidebar.tsx",
        lineNumber: 16,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w-10 h-10 rounded-xl grid place-items-center text-white text-lg font-bold my-1 bg-[#053497] ", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react_fontawesome6.FontAwesomeIcon, { icon: nav != null && nav.isNavOpen ? import_free_solid_svg_icons5.faChevronLeft : import_free_solid_svg_icons5.faChevronRight }, void 0, !1, {
          fileName: "app/components/home/sidebar/sidebar.tsx",
          lineNumber: 17,
          columnNumber: 138
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/home/sidebar/sidebar.tsx",
        lineNumber: 17,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "My campaigns", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !0, icon: import_free_solid_svg_icons5.faFolder }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 19,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "Find campaigns", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !1, icon: import_free_solid_svg_icons5.faSearch }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 20,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "Inbox", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !1, icon: import_free_solid_svg_icons5.faEnvelope }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "My earnings", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !1, icon: import_free_solid_svg_icons5.faHandHoldingDollar }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 22,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "Drafts", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !1, icon: import_free_brands_svg_icons2.faDraft2digital }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 23,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "Favourite", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !1, icon: import_free_solid_svg_icons5.faHeart }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "Invite", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !1, icon: import_free_solid_svg_icons5.faPeopleLine }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 25,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "grow" }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(NavTab, { title: "Help", isOpen: nav == null ? void 0 : nav.isNavOpen, isActive: !1, icon: import_free_solid_svg_icons5.faCircleQuestion }, void 0, !1, {
      fileName: "app/components/home/sidebar/sidebar.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}, NavTab = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: `${props.isOpen ? "w-full" : "w-10"} h-10 rounded-xl ${props.isOpen ? "flex items-center " : "grid place-items-center"}  text-white text-lg font-bold my-1 ${props.isActive ? "bg-[#053497]" : ""} ${props.isOpen ? "px-4" : ""}`, children: [
  " ",
  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react_fontawesome6.FontAwesomeIcon, { icon: props.icon }, void 0, !1, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 46,
    columnNumber: 257
  }, this),
  " ",
  props.isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "ml-4 font-normal text-md", children: props.title }, void 0, !1, {
    fileName: "app/components/home/sidebar/sidebar.tsx",
    lineNumber: 46,
    columnNumber: 327
  }, this) : null,
  "  "
] }, void 0, !0, {
  fileName: "app/components/home/sidebar/sidebar.tsx",
  lineNumber: 46,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/home/sidebar/sidebar.tsx",
  lineNumber: 45,
  columnNumber: 9
}, this);

// app/routes/home.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), HomePage = () => {
  let nav = (0, import_react15.useContext)(NavContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex md:relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SideBar, {}, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: `w-full md:grow  md:relative ${nav != null && nav.isNavOpen ? "md:ml-60" : "md:ml-20"}  p-2`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(MainNavBar, {}, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 15,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(HomeFooter, {}, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}, home_default = HomePage;

// app/routes/home/profilecomplete.tsx
var profilecomplete_exports = {};
__export(profilecomplete_exports, {
  default: () => profilecomplete_default
});
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), UserEditBox = () => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "w-full bg-white rounded-xl p-4 shadow-xl ", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "w-full  rounded-lg flex shadow-lg my-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "text-lg text-center font-medium p-2 bg-secondary text-white w-4/6 rounded-xl", children: "Please complete your profile" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "text-lg text-center font-medium p-2 bg-white text-primary w-4/6 rounded-r-xl", children: "60% completed" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 11,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "p-6  w-full hidden md:block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "w-full grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("img", { src: "/images/avatar/profile1.png", alt: "error", className: "h-[400px]" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 18,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 17,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h1", { className: "pt-4 text-3xl text-primary text-left font-semibold", children: "Welcome" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 20,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: "pt-2 text-black text-xl font-normal", children: "Thank you for the confirmation, Login with your account and start searching for the brands." }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 21,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 16,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl px-2 py-4 flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ProfileCompleteBox, { isActive: !0, positionumber: "01", title: "Info" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 25,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ProfileCompleteBox, { isActive: !1, positionumber: "02", title: "Audience" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 26,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ProfileCompleteBox, { isActive: !1, positionumber: "03", title: "Connect" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 27,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ProfileCompleteBox, { isActive: !1, positionumber: "04", title: "Contact" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete.tsx",
        lineNumber: 28,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 24,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 23,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/home/profilecomplete.tsx",
      lineNumber: 31,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/profilecomplete.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/profilecomplete.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this), profilecomplete_default = UserEditBox, ProfileCompleteBox = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "px-3 py-2", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: `grid place-items-center h-14 w-14 shadow-md rounded-md ${props.isActive ? "bg-secondary" : "bg-gray-200"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: `font-medium text-xl ${props.isActive ? "text-white" : "text-black"}`, children: props.positionumber }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 55,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 54,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h4", { className: `text-sm text-center ${props.isActive ? "text-black" : "text-gray-500"} mt-2`, children: props.title }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete.tsx",
    lineNumber: 57,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/profilecomplete.tsx",
  lineNumber: 53,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/profilecomplete.tsx",
  lineNumber: 52,
  columnNumber: 9
}, this);

// app/routes/home/profilecomplete/secondpage.tsx
var secondpage_exports = {};
__export(secondpage_exports, {
  default: () => secondpage_default
});
var import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), SecondPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "w-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Main market" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 12,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 13,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Other markets" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 14,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 15,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Category" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 16,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 17,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Account currency" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 18,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 19,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Languages" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 20,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 21,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react17.Link, { to: "/home/profilecomplete/thirdpage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 23,
    columnNumber: 29
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/secondpage.tsx",
    lineNumber: 22,
    columnNumber: 25
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/profilecomplete/secondpage.tsx",
  lineNumber: 11,
  columnNumber: 21
}, this) }, void 0, !1, {
  fileName: "app/routes/home/profilecomplete/secondpage.tsx",
  lineNumber: 10,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/routes/home/profilecomplete/secondpage.tsx",
  lineNumber: 9,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/profilecomplete/secondpage.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this), secondpage_default = SecondPage;

// app/routes/home/profilecomplete/forthpage.tsx
var forthpage_exports = {};
__export(forthpage_exports, {
  default: () => forthpage_default
});
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), ForthPage = () => {
  let navigate = (0, import_react18.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Country" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 13,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 14,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Addrss" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 15,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 16,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "State/Region" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 17,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 18,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "City" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 19,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 20,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Phone number" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 21,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex gap-2 mt-4 items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "checkbox", name: "check2" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 25,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 24,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "text-left text-[10px] text-black font-normal", children: "The above details are true and correct" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 27,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 23,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { onClick: () => navigate(-1), className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(CusButton, { text: "back", textColor: "text-black", width: "w-full", background: "bg-gray-200", fontwidth: "font-bold" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 31,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 30,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w-10" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 33,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react18.Link, { to: "/home", className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 35,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 34,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 29,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/profilecomplete/forthpage.tsx",
    lineNumber: 12,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/forthpage.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/forthpage.tsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/forthpage.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}, forthpage_default = ForthPage;

// app/routes/home/profilecomplete/thirdpage.tsx
var thirdpage_exports = {};
__export(thirdpage_exports, {
  default: () => thirdpage_default
});
var import_react19 = require("@remix-run/react");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), ThirdPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "p-8 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Channels" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex content-center items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-8 h-8" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 13,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 12,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-8 h-8" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 16,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { src: "/images/media/youtube.png", alt: "error", className: "w-8 h-8" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 19,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 18,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { src: "/images/media/snapchat.png", alt: "error", className: "w-8 h-8" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { src: "/images/media/twitter.png", alt: "error", className: "w-8 h-8" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 25,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "grow" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(CusButton, { text: "Add new Channel", textColor: "text-white", width: "w-36", background: "bg-primary", fontwidth: "font-normal", textSize: "text-md" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 28,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 32,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 33,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react19.Link, { to: "/home/profilecomplete/forthpage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 35,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
      lineNumber: 34,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
    lineNumber: 31,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
    lineNumber: 30,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
  lineNumber: 9,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/profilecomplete/thirdpage.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this), thirdpage_default = ThirdPage;

// app/routes/home/profilecomplete/index.tsx
var profilecomplete_exports2 = {};
__export(profilecomplete_exports2, {
  default: () => profilecomplete_default2
});
var import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), UserInputBoxOne = () => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "p-8 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h1", { className: "text-2xl text-black font-bold", children: "Tell us about yourself" }, void 0, !1, {
    fileName: "app/routes/home/profilecomplete/index.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-56 bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("img", { src: "/images/icons/gallery.png", alt: "error" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 14,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "mt-4", children: "Drop profile photo here." }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 15,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "mt-4", children: "The image should either be jpg jped or png format and be a maximum size of 5 MB" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 18,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(CusButton, { text: "Upload", textColor: "text-white", width: "w-full", background: "bg-gray-400" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 23,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 22,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/profilecomplete/index.tsx",
      lineNumber: 13,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/profilecomplete/index.tsx",
      lineNumber: 12,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Email" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 28,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 29,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Last Name" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 30,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 31,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Nickname" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Date of birth" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 34,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 35,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Gender" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Bio" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("textarea", { className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 39,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react20.Link, { to: "/home/profilecomplete/secondpage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 41,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/home/profilecomplete/index.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/profilecomplete/index.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/profilecomplete/index.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/profilecomplete/index.tsx",
  lineNumber: 9,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/profilecomplete/index.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this), profilecomplete_default2 = UserInputBoxOne;

// app/routes/home/findcampaign.tsx
var findcampaign_exports = {};
__export(findcampaign_exports, {
  default: () => findcampaign_default
});
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), FindCampaign = () => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h1", { children: "Find campaign" }, void 0, !1, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 7,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { children: "Here you can manage all the campaigns that you are participating in." }, void 0, !1, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 8,
    columnNumber: 25
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/findcampaign.tsx",
  lineNumber: 6,
  columnNumber: 21
}, this) }, void 0, !1, {
  fileName: "app/routes/home/findcampaign.tsx",
  lineNumber: 5,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/routes/home/findcampaign.tsx",
  lineNumber: 4,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/findcampaign.tsx",
  lineNumber: 3,
  columnNumber: 9
}, this), findcampaign_default = FindCampaign;

// app/routes/home/empty.tsx
var empty_exports = {};
__export(empty_exports, {
  default: () => empty_default
});
var import_free_solid_svg_icons6 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome7 = require("@fortawesome/react-fontawesome"), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), Empty = () => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "p-10 rounded-xl shadow-xl w-72 pt-28", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react_fontawesome7.FontAwesomeIcon, { className: "text-black font-bold text-4xl", icon: import_free_solid_svg_icons6.faSearch }, void 0, !1, {
    fileName: "app/routes/home/empty.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "font-semibold text-lg text-black", children: "To earn more money?" }, void 0, !1, {
    fileName: "app/routes/home/empty.tsx",
    lineNumber: 9,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "font-normal text-sm text-black", children: "Search, apply for public campaigns and create more great content" }, void 0, !1, {
    fileName: "app/routes/home/empty.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/empty.tsx",
  lineNumber: 7,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/empty.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this), empty_default = Empty;

// app/routes/home/index.tsx
var home_exports2 = {};
__export(home_exports2, {
  default: () => home_default2
});
var import_free_solid_svg_icons7 = require("@fortawesome/free-solid-svg-icons"), import_react_fontawesome8 = require("@fortawesome/react-fontawesome"), import_react21 = require("@remix-run/react");

// app/components/utils/brandcard.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), BrandCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_jsx_dev_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-72 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }, void 0, !1, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 15,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, !1, {
      fileName: "app/components/utils/brandcard.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/brandcard.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }, void 0, !1, {
    fileName: "app/components/utils/brandcard.tsx",
    lineNumber: 19,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }, void 0, !1, {
    fileName: "app/components/utils/brandcard.tsx",
    lineNumber: 20,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }, void 0, !1, {
    fileName: "app/components/utils/brandcard.tsx",
    lineNumber: 21,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }, void 0, !1, {
    fileName: "app/components/utils/brandcard.tsx",
    lineNumber: 23,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/brandcard.tsx",
  lineNumber: 12,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/brandcard.tsx",
  lineNumber: 11,
  columnNumber: 9
}, this);

// app/components/utils/campagincard.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), CampaginCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-72 my-2", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: props.image, alt: "error", className: "object-cover w-16 h-16 rounded" }, void 0, !1, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 15,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: props.name }, void 0, !1, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-black font-semibold text-md text-left my-4", children: "Lulu 50% off - SPORTS WEEK" }, void 0, !1, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 19,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Category : Consumer Electronics" }, void 0, !1, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 20,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "www.adidas.co.in" }, void 0, !1, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 21,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-full h-[1px] bg-black my-2" }, void 0, !1, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 22,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }, void 0, !1, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "grow" }, void 0, !1, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 25,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left", children: "Platform" }, void 0, !1, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 23,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "grow flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: "./images/media/youtube.png", alt: "error", className: "rounded-full w-8 h-8" }, void 0, !1, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 32,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 31,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 30,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mx-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "p-1 border-2 border-blue-500 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: "./images/media/instagram.png", alt: "error", className: "rounded-full w-8 h-8" }, void 0, !1, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 37,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 36,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 35,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-black font-bold  text-md text-right my-4", children: [
      "3500 ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/utils/campagincard.tsx",
        lineNumber: 42,
        columnNumber: 91
      }, this),
      "USD / post"
    ] }, void 0, !0, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 42,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/utils/campagincard.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 28,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(CusButton, { text: "Learn more & apply", textColor: "text-black", background: "bg-[#fbca8e]", width: "w-full", margin: "my-0", fontwidth: "font-bold" }, void 0, !1, {
    fileName: "app/components/utils/campagincard.tsx",
    lineNumber: 45,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/utils/campagincard.tsx",
  lineNumber: 12,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/utils/campagincard.tsx",
  lineNumber: 11,
  columnNumber: 9
}, this);

// app/routes/home/index.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), HomePage2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ProfileComplete, {}, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Intro, {}, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(EarnSection, {}, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 13,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(SponsoredPosts, {}, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 14,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(NewCampaign, {}, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 15,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(TopBrands, {}, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this), home_default2 = HomePage2, ProfileComplete = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full bg-secondary rounded-xl p-2 my-4 flex", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex grow flex-col md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "py-10 md:w-[500px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-2xl text-white font-bold", children: "Please Complete Your Profile" }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 31,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-md text-white font-normal", children: "Your linked social media accounts are under verification. You'll be notified within 24 hours." }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 32,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 30,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "lg:w-96 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react21.Link, { to: "./profilecomplete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CusButton, { text: "Click here to complete", textColor: "text-white", background: "bg-primary" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 37,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 36,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 28,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react_fontawesome8.FontAwesomeIcon, { className: "text-white text-2xl font-bold", icon: import_free_solid_svg_icons7.faXmark }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 41,
      columnNumber: 23
    }, this),
    " "
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 41,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 27,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 26,
  columnNumber: 9
}, this), Intro = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grid place-items-center w-full mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-4xl text-primary font-bold text-center", children: "Welcome to SWRV" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-xl text-primary font-normal text-center", children: "Reach the next billion" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf1.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 56,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 55,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf3.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 59,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf4.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 62,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "hidden xl:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf5.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 65,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 64,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf6.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 68,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "hidden xl:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf7.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 71,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf8.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 74,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf9.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf13.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 80,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 79,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/inf/inf14.png", alt: "error" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 83,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 54,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 49,
  columnNumber: 9
}, this), EarnSection = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full rounded-xl flex flex-col md:flex-row bg-yellow-500 mt-12", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("img", { src: "./images/cashgirl.png", alt: "error", className: "md:h-80" }, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 96,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 95,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-2xl text-black font-bold text-left", children: "To earn more money?" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 100,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-md text-black font-normal text-left md:w-80", children: "Search, apply for brands campaigns and create more great content." }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 101,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 99,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 98,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 94,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 93,
  columnNumber: 9
}, this), SponsoredPosts = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons7.faHeart, className: "text-md text-secondary" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 114,
      columnNumber: 101
    }, this),
    " Sponsored Posts "
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 114,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/adidas.jpg", name: "Adidas" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 116,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/furinicom.jpg", name: "Furinicom" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 117,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/hilton.jpg", name: "Hilton" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 118,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/lucent.jpg", name: "Lucent" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 119,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 115,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 113,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 112,
  columnNumber: 9
}, this), NewCampaign = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons7.faIdBadge, className: "text-md text-secondary" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 130,
      columnNumber: 99
    }, this),
    " New Campaign "
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 130,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/powerfitgym.jpg", name: "Power Fit Gym" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 132,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/szechuan_restaurant.jpg", name: "Szechuan Restaurant" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 133,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/theburgershop.jpg", name: "Theburgershop" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 134,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CampaginCard, { image: "./images/brand/tronicsfix.jpg", name: "Tronicsfix" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 135,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 131,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 129,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 128,
  columnNumber: 9
}, this), TopBrands = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons7.faStar, className: "text-md text-secondary" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 145,
      columnNumber: 99
    }, this),
    " Top brands "
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 145,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(BrandCard, { image: "./images/brand/adidas.jpg", name: "Adidas" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 147,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(BrandCard, { image: "./images/brand/furinicom.jpg", name: "Furinicom" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 148,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(BrandCard, { image: "./images/brand/lucent.jpg", name: "Lucent" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 149,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(BrandCard, { image: "./images/brand/tronicsfix.jpg", name: "Tronicsfix" }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 150,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 146,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 144,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 143,
  columnNumber: 9
}, this);

// app/routes/home/sorry.tsx
var sorry_exports = {};
__export(sorry_exports, {
  default: () => sorry_default
});
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), Sorry = () => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_jsx_dev_runtime41.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-10 mt-6 relative", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: " text-center text-[100px] font-black text-stroke text-white  absolute translate-y-40 grid place-items-center top-0 left-0 translate-x-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: "Sorry !!" }, void 0, !1, {
    fileName: "app/routes/home/sorry.tsx",
    lineNumber: 6,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/sorry.tsx",
    lineNumber: 5,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "w-full grid place-content-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { src: "/images/avatar/sorry.png", alt: "error", className: "h-[300px]" }, void 0, !1, {
    fileName: "app/routes/home/sorry.tsx",
    lineNumber: 11,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/sorry.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "w-full grid place-items-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "text-sm font-normal text-gray-500 text-left w-96", children: [
    "Thank you for expressing interest in SWRV. While we were impressed with your profile, unfortunately, your profile dosent meet the minimum criteria which we need in this platform ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/home/sorry.tsx",
      lineNumber: 16,
      columnNumber: 203
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/home/sorry.tsx",
      lineNumber: 16,
      columnNumber: 209
    }, this),
    "We sincerely appreciate your interest and hope that you\u2019ll stay in touch. Please don\u2019t hesitate to reach out if you disagree with our decision."
  ] }, void 0, !0, {
    fileName: "app/routes/home/sorry.tsx",
    lineNumber: 15,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/home/sorry.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/home/sorry.tsx",
  lineNumber: 4,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/routes/home/sorry.tsx",
  lineNumber: 3,
  columnNumber: 9
}, this), sorry_default = Sorry;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9a87af8c", entry: { module: "/build/entry.client-Z7RN5FC6.js", imports: ["/build/_shared/chunk-WWIIKULU.js", "/build/_shared/chunk-I7DWLWVF.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3KHGRV5D.js", imports: ["/build/_shared/chunk-CDPSMW7M.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-BP7MDSDH.js", imports: ["/build/_shared/chunk-DY5LGYHO.js", "/build/_shared/chunk-25HLZJFV.js", "/build/_shared/chunk-X5S6E4O6.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/bloginfo": { id: "routes/blogs/bloginfo", parentId: "root", path: "blogs/bloginfo", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs/bloginfo-R2HCP6J7.js", imports: ["/build/_shared/chunk-Z7BZGP52.js", "/build/_shared/chunk-DY5LGYHO.js", "/build/_shared/chunk-25HLZJFV.js", "/build/_shared/chunk-X5S6E4O6.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/index": { id: "routes/blogs/index", parentId: "root", path: "blogs", index: !0, caseSensitive: void 0, module: "/build/routes/blogs/index-QWHYU2LI.js", imports: ["/build/_shared/chunk-Z7BZGP52.js", "/build/_shared/chunk-DY5LGYHO.js", "/build/_shared/chunk-25HLZJFV.js", "/build/_shared/chunk-X5S6E4O6.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-ZNHIST6B.js", imports: ["/build/_shared/chunk-IKSNJ3BJ.js", "/build/_shared/chunk-DM57AURS.js", "/build/_shared/chunk-DY5LGYHO.js", "/build/_shared/chunk-25HLZJFV.js", "/build/_shared/chunk-X5S6E4O6.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-JXVMFRZI.js", imports: ["/build/_shared/chunk-25HLZJFV.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/empty": { id: "routes/home/empty", parentId: "routes/home", path: "empty", index: void 0, caseSensitive: void 0, module: "/build/routes/home/empty-WM2ZTSWC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/findcampaign": { id: "routes/home/findcampaign", parentId: "routes/home", path: "findcampaign", index: void 0, caseSensitive: void 0, module: "/build/routes/home/findcampaign-J4V4XSTH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/index": { id: "routes/home/index", parentId: "routes/home", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/index-7PHULGNH.js", imports: ["/build/_shared/chunk-DM57AURS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete": { id: "routes/home/profilecomplete", parentId: "routes/home", path: "profilecomplete", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete-ZWTN4YAC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/forthpage": { id: "routes/home/profilecomplete/forthpage", parentId: "routes/home/profilecomplete", path: "forthpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/forthpage-4XYX4S7B.js", imports: ["/build/_shared/chunk-DM57AURS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/index": { id: "routes/home/profilecomplete/index", parentId: "routes/home/profilecomplete", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/index-J2VTQG6Y.js", imports: ["/build/_shared/chunk-DM57AURS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/secondpage": { id: "routes/home/profilecomplete/secondpage", parentId: "routes/home/profilecomplete", path: "secondpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/secondpage-KGS5OZZD.js", imports: ["/build/_shared/chunk-DM57AURS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/profilecomplete/thirdpage": { id: "routes/home/profilecomplete/thirdpage", parentId: "routes/home/profilecomplete", path: "thirdpage", index: void 0, caseSensitive: void 0, module: "/build/routes/home/profilecomplete/thirdpage-QDKCRFSN.js", imports: ["/build/_shared/chunk-DM57AURS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/sorry": { id: "routes/home/sorry", parentId: "routes/home", path: "sorry", index: void 0, caseSensitive: void 0, module: "/build/routes/home/sorry-OHFJNKHS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-HRBKD2EU.js", imports: ["/build/_shared/chunk-Z7BZGP52.js", "/build/_shared/chunk-IKSNJ3BJ.js", "/build/_shared/chunk-DM57AURS.js", "/build/_shared/chunk-DY5LGYHO.js", "/build/_shared/chunk-25HLZJFV.js", "/build/_shared/chunk-X5S6E4O6.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-32C5RLCO.js", imports: ["/build/_shared/chunk-DM57AURS.js", "/build/_shared/chunk-X5S6E4O6.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-Q5LXH2DW.js", imports: ["/build/_shared/chunk-DM57AURS.js", "/build/_shared/chunk-X5S6E4O6.js", "/build/_shared/chunk-F6L2V6VF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9A87AF8C.js" };

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
  "routes/home/findcampaign": {
    id: "routes/home/findcampaign",
    parentId: "routes/home",
    path: "findcampaign",
    index: void 0,
    caseSensitive: void 0,
    module: findcampaign_exports
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
//# sourceMappingURL=index.js.map
