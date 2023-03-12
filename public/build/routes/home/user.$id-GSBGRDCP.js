import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import {
  FontAwesomeIcon,
  faRemove
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/user.$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BrandPage = () => {
  const user = useLoaderData().user;
  const userinsights = useLoaderData().userinsights;
  const [userDetails, setUserDetails] = (0, import_react2.useState)(0 /* insights */);
  const avatar = user["pic"] == "0" || user["pic"] == null || user["pic"] == void 0 || user["pic"] == "" ? "/images/avatar/user.png" : user["pic"];
  const [error, setError] = (0, import_react2.useState)(null);
  const messageRef = (0, import_react2.useRef)(null);
  const [connectBox, setConnectBox] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${connectBox ? "fixed" : "hidden"}`, style: { zIndex: 100 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-white rounded-xl shadow-xl w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setConnectBox(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faRemove, className: "font-bold text-2xl text-center text-primary" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 55,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold text-left", children: "Connect" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: messageRef, className: "p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4", placeholder: "message" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 61,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 64,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: async () => {
          var _a, _b, _c, _d;
          if (((_a = messageRef.current) == null ? void 0 : _a.value) == null || ((_b = messageRef.current) == null ? void 0 : _b.value) == void 0 || ((_c = messageRef.current) == null ? void 0 : _c.value) == "")
            return setError("Message can't be blank");
          let req = {
            "campaignDraftId": "0",
            "fromUserId": user.id,
            "toUserId": "89",
            "comment": (_d = messageRef.current) == null ? void 0 : _d.value
          };
          const data = await axios_default({
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
              "Accept": "*"
            }
          });
          if (!data.data.status)
            return setError(data.data.message);
          return setConnectBox(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "send", background: "bg-primary", textColor: "text-white" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 65,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/products/shoe1.jpg", alt: "error", className: "w-full h-60 object-cover rounded-t-xl" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 flex flex-row gap-x-3 lg:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar, alt: "user avatar", className: "w-32 h-32 rounded-md" }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 100,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 99,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-lg font-medium my-2", children: user.userName }, void 0, false, {
              fileName: "app/routes/home/user.$id.tsx",
              lineNumber: 103,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-gray-600 text-sm font-medium my-2", children: user.knownAs }, void 0, false, {
              fileName: "app/routes/home/user.$id.tsx",
              lineNumber: 104,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-800 text-md font-normal", children: user.email }, void 0, false, {
              fileName: "app/routes/home/user.$id.tsx",
              lineNumber: 105,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
              setConnectBox(true);
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Message", background: "bg-secondary", fontwidth: "font-bold" }, void 0, false, {
              fileName: "app/routes/home/user.$id.tsx",
              lineNumber: 109,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/home/user.$id.tsx",
              lineNumber: 106,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 102,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 98,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-72 w-[2px] bg-gray-300 hidden lg:block mt-8" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 113,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 flex-col md:flex-row gap-y-2" }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 115,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-medium mt-4 mb-2", children: "User Bio" }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-sm font-normal", children: user.bio }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 118,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 114,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4 shadow-xl bg-white rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mx-4 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setUserDetails(0 /* insights */);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Insights", background: `${userDetails == 0 /* insights */ ? "bg-[#01FFF4]" : "bg-gray-100"}`, fontwidth: "font-bold", textColor: `${userDetails == 0 /* insights */ ? "text-black" : "text-gray-600"}` }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 125,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 124,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setUserDetails(1 /* payments */);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Payments", background: `${userDetails == 1 /* payments */ ? "bg-[#01FFF4]" : "bg-gray-100"}`, fontwidth: "font-bold", textColor: `${userDetails == 1 /* payments */ ? "text-black" : "text-gray-600"}` }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 128,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 127,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 123,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      userDetails == 0 /* insights */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Insights, { insights: userinsights }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 135,
        columnNumber: 63
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 135,
        columnNumber: 111
      }, this),
      userDetails == 1 /* payments */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Payments, {}, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 138,
        columnNumber: 63
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 138,
        columnNumber: 87
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 133,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/user.$id.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
};
var user_id_default = BrandPage;
var Insights = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 rounded-md p-4 bg-white flex gap-8 flex-wrap justify-center align-middle", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-900 text-lg font-semibold", children: "Audience gender" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 156,
        columnNumber: 21
      }, this),
      props.insights.audience.genders.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: val.code }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 161,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 162,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: val.weight }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 163,
            columnNumber: 37
          }, this)
        ] }, index, true, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 160,
          columnNumber: 33
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 155,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-900 text-lg font-semibold ", children: "Audience age" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 170,
        columnNumber: 21
      }, this),
      props.insights.audience.ages.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: val.code }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 175,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 176,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: val.weight }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 177,
            columnNumber: 37
          }, this)
        ] }, index, true, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 174,
          columnNumber: 33
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 169,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-900 text-lg font-semibold ", children: "Audience country" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 184,
        columnNumber: 21
      }, this),
      props.insights.audience.geoCountries.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: [
            "[",
            val.code,
            "] - ",
            val.name
          ] }, void 0, true, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 189,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 190,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: val.weight }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 191,
            columnNumber: 37
          }, this)
        ] }, index, true, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 188,
          columnNumber: 33
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 183,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-900 text-lg font-semibold ", children: "Average Result" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 198,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: "Posts Count" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 200,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 201,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.postsCount }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 202,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 199,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: "Followers" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 205,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 206,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.profile.followers }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 207,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 204,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: "Engagement" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 210,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 211,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.profile.engagements }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 212,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 209,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: "Engagements Rate" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 215,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 216,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.profile.engagementRate }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 217,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 214,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: "Average Comments" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 220,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 221,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.avgComments }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 222,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 219,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b-2 border-gray-300 my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-left", children: "Average View" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 225,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 226,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-md font-semibold text-right", children: props.insights.avgViews }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 227,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 224,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 197,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/user.$id.tsx",
    lineNumber: 154,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/user.$id.tsx",
    lineNumber: 153,
    columnNumber: 9
  }, this);
};
var Payments = () => {
  const payment_data = [
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
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-scroll no-scrollbar my-4 rounded-md p-4 block bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "table-auto w-full min-w-[800px]", style: {
    "borderCollapse": "separate",
    "borderSpacing": "0 1em"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { style: { padding: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "bg-gray-200 py-4 rounded-l-lg min-w-44 text-primary text-md font-semibold", children: "Influencer" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 312,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Campaign" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 313,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Campaign details" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 314,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Target" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 315,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "bg-gray-200 min-w-44 text-primary text-md font-semibold", children: "Amount" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 316,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "bg-gray-200 rounded-r-lg min-w-44 text-primary text-md font-semibold", children: "Amount Released" }, void 0, false, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 317,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 311,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 310,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: payment_data.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { style: { border: "2px solid black !important" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-primary text-md font-semibold text-center", children: val.name }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 326,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-center gird place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: val.camppaign[0], alt: "error", className: "w-20 h-20 rounded-lg object-cover" }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 329,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 328,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 327,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " text-center grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-semibold text-md", children: val.details[0] }, void 0, false, {
              fileName: "app/routes/home/user.$id.tsx",
              lineNumber: 334,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-sm", children: val.details[1] }, void 0, false, {
              fileName: "app/routes/home/user.$id.tsx",
              lineNumber: 335,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 333,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 332,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " text-center text-primary text-md font-semibold", children: val.target }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 338,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " text-center text-primary text-md font-semibold", children: val.amount }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 339,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: " text-center text-primary text-md font-semibold", children: val.amountres }, void 0, false, {
            fileName: "app/routes/home/user.$id.tsx",
            lineNumber: 340,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 325,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-300 w-full h-[1px]" }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 344,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 343,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/home/user.$id.tsx",
          lineNumber: 342,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/user.$id.tsx",
        lineNumber: 324,
        columnNumber: 37
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/user.$id.tsx",
      lineNumber: 320,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/user.$id.tsx",
    lineNumber: 307,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/home/user.$id.tsx",
    lineNumber: 288,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/user.$id.tsx",
    lineNumber: 287,
    columnNumber: 9
  }, this);
};
export {
  user_id_default as default
};
//# sourceMappingURL=/build/routes/home/user.$id-GSBGRDCP.js.map
