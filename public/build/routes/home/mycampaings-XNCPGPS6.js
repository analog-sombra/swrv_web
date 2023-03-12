import {
  CampaginCard
} from "/build/_shared/chunk-XVS6OCT3.js";
import {
  pastbrandcard_default
} from "/build/_shared/chunk-5RK2GZNS.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import {
  FontAwesomeIcon,
  faIdBadge
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/mycampaings.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MyCampaigns = () => {
  const [completed, setCompleted] = (0, import_react2.useState)(false);
  const userdata = useLoaderData();
  const isBrand = userdata.userdata.role["code"] == "50" ? true : false;
  const campdata = userdata.camp.campaigns;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "My campaigns" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 66,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 67,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block md:grow" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 64,
      columnNumber: 17
    }, this),
    isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black text-center font-bold text-2xl", children: "Would you like to collaborate ?" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 83,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center bg-red", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/home/createcampaign", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Create Campaign", textColor: "text-white", background: "bg-secondary" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 86,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 85,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 84,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 82,
      columnNumber: 25
    }, this) : null,
    isBrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: completed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompletedCampaigns, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 96,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActiveCampaign, { camp: campdata }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 98,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 93,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserDrafts, { userid: userdata.userdata.id }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 101,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 63,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
};
var mycampaings_default = MyCampaigns;
var ActiveCampaign = (props) => {
  const campdata = props.camp;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faIdBadge, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 120,
        columnNumber: 99
      }, this),
      " New Campaign "
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 120,
      columnNumber: 17
    }, this),
    campdata.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "Here is no campaign created.." }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 122,
      columnNumber: 44
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: campdata.map((val, i) => {
      const platforms = [];
      for (let i2 = 0; i2 < val.platforms.length; i2++) {
        platforms.push(val.platforms[i2]["platformLogoUrl"]);
      }
      let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { id: val.id, currency: val.currency.code, platforms, maxval: val.costPerPost.split(".")[0], weburl: "agag", category: val.type.name, image, name: val.name }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 134,
        columnNumber: 37
      }, this) }, i, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 133,
        columnNumber: 33
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 124,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 119,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 118,
    columnNumber: 9
  }, this);
};
var CompletedCampaigns = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pastbrandcard_default, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 151,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pastbrandcard_default, {}, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 152,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 150,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 149,
    columnNumber: 9
  }, this);
};
var UserDrafts = (props) => {
  const [userDraft, setUserDraft] = (0, import_react2.useState)([]);
  const init = async () => {
    let req = {
      "search": {
        "status": "3",
        "influencer": props.userid,
        "fromUser": props.userid
      }
    };
    const apidata = await axios_default({
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
        "Accept": "*"
      }
    });
    setUserDraft(apidata.data.data);
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faIdBadge, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 197,
        columnNumber: 95
      }, this),
      " New Campaign "
    ] }, void 0, true, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 197,
      columnNumber: 13
    }, this),
    userDraft.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-black font-medium text-xl text-center", children: "You haven't collaborated in any champaing." }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 199,
      columnNumber: 41
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: userDraft.map((val, i) => {
      let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl p-4 w-64 my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: "error", className: "object-cover w-16 h-16 rounded" }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 210,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 209,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xl content-end text-left", children: val.brand.name }, void 0, false, {
            fileName: "app/routes/home/mycampaings.tsx",
            lineNumber: 212,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 208,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-xs text-left mt-2", children: [
          "email : ",
          val.brand.email
        ] }, void 0, true, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 214,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/home/campaigns/${val.campaign.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "View", textColor: "text-black", background: "bg-[#01FFF4]", width: "w-full", margin: "my-2", fontwidth: "font-bold" }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 216,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/home/mycampaings.tsx",
          lineNumber: 215,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 207,
        columnNumber: 33
      }, this) }, i, false, {
        fileName: "app/routes/home/mycampaings.tsx",
        lineNumber: 206,
        columnNumber: 29
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/mycampaings.tsx",
      lineNumber: 201,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/mycampaings.tsx",
    lineNumber: 196,
    columnNumber: 9
  }, this);
};
export {
  mycampaings_default as default
};
//# sourceMappingURL=/build/routes/home/mycampaings-XNCPGPS6.js.map
