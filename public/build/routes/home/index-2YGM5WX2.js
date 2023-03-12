import {
  BrandCard,
  InfluencerSearch
} from "/build/_shared/chunk-WJ3QP7TX.js";
import "/build/_shared/chunk-72Y4ULOI.js";
import "/build/_shared/chunk-DN3EYWBV.js";
import {
  CampaginCard
} from "/build/_shared/chunk-XVS6OCT3.js";
import "/build/_shared/chunk-CAUJ6DTL.js";
import {
  getCampaignType
} from "/build/_shared/chunk-4645WABA.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import {
  create
} from "/build/_shared/chunk-3KIOMRCQ.js";
import {
  FontAwesomeIcon,
  faHeart,
  faIdBadge,
  faStar,
  faXmark
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  Link,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/index.tsx
var import_react2 = __toESM(require_react());

// app/state/home/profilecompletestat.ts
var ProfileComleteStore = create()((set) => ({
  isOpen: true,
  change: (value) => set((state) => ({ isOpen: value }))
}));
var profilecompletestat_default = ProfileComleteStore;

// app/components/utils/topinfluencercard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TopInfluencerCard = (props) => {
  const Star = () => {
    const fullStars = Math.floor(props.star);
    const fractionalStar = props.star - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "text-xs text-pink-500", icon: faStar }, i, false, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 22,
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
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 28,
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
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 39,
            columnNumber: 17
          },
          this
        )
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: stars }, void 0, false, {
      fileName: "app/components/utils/topinfluencercard.tsx",
      lineNumber: 47,
      columnNumber: 16
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-xl w-64 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.image, alt: "error", className: "w-full h-40 object-cover rounded-t-md" }, void 0, false, {
      fileName: "app/components/utils/topinfluencercard.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start my-2 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-semibold text-sm text-left", children: props.name.split("@")[0] }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 64,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 66,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 63,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-bold  text-md text-right", children: [
          "3500 ",
          props.currency,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 70,
            columnNumber: 106
          }, this),
          " ",
          props.dob
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 70,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/topinfluencercard.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200  rounded-md py-2 flex justify-around", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm font-semibold", children: "2 00 5887" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 76,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-xs font-normal", children: "Reach" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 77,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 75,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-[1px] bg-slate-900" }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 79,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm font-semibold", children: "1 34 9887" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 81,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-xs font-normal", children: "Impression" }, void 0, false, {
              fileName: "app/components/utils/topinfluencercard.tsx",
              lineNumber: 82,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 80,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 74,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 text-center text-sm font-semibold rounded-md py-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "SWRV score :  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-normal", children: "2005887" }, void 0, false, {
            fileName: "app/components/utils/topinfluencercard.tsx",
            lineNumber: 86,
            columnNumber: 46
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 86,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/utils/topinfluencercard.tsx",
          lineNumber: 85,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/utils/topinfluencercard.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/utils/topinfluencercard.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/utils/topinfluencercard.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/topinfluencercard.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
};
var topinfluencercard_default = TopInfluencerCard;

// app/routes/home/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var HomePage = () => {
  const user = useLoaderData();
  const userdata = user.user;
  const profilecomplted = userdata["profileCompleteness"];
  const isbrand = user.user.role.code != 10;
  const isOpen = profilecompletestat_default((state) => state.isOpen);
  const isOpenChange = profilecompletestat_default((state) => state.change);
  const navigator = useNavigate();
  const init = async () => {
  };
  (0, import_react2.useEffect)(() => {
    isOpenChange(profilecomplted == "1" ? false : true);
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProfileComplete, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 56,
      columnNumber: 23
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Intro, {}, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    isbrand ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InfluencerSearch, { platform: user.platform, country: user.country, category: user.category }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TopInfluencer, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 60,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarnSection, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 68,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SponsoredPosts, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NewCampaign, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TopBrands, {}, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 71,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 66,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
};
var home_default = HomePage;
var ProfileComplete = () => {
  const changeState = profilecompletestat_default((state) => state.change);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-secondary rounded-xl p-2 my-4 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex grow flex-col md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-10 md:w-[400px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl text-white font-bold", children: "Please Complete Your Profile" }, void 0, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-md text-white font-normal", children: "Your linked social media accounts are under verification. You'll be notified within 24 hours." }, void 0, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 88,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "xl:w-96 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/home/profilecomplete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CusButton, { text: "Click here to complete", textColor: "text-white", background: "bg-primary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 95,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 94,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 93,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 86,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => {
      changeState(false);
    }, children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { className: "text-white text-2xl font-bold", icon: faXmark }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 99,
        columnNumber: 62
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 85,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 84,
    columnNumber: 9
  }, this);
};
var Intro = () => {
  const navigator = useNavigate();
  let data = [
    { "image": "74.jfif", "id": "74" },
    { "image": "75.jfif", "id": "75" },
    { "image": "76.jfif", "id": "76" },
    { "image": "77.jfif", "id": "77" },
    { "image": "78.jfif", "id": "78" },
    { "image": "79.jfif", "id": "79" },
    { "image": "80.jfif", "id": "80" },
    { "image": "81.jfif", "id": "81" },
    { "image": "82.jfif", "id": "82" },
    { "image": "83.jfif", "id": "83" },
    { "image": "84.jfif", "id": "84" },
    { "image": "85.jfif", "id": "85" },
    { "image": "86.jfif", "id": "86" },
    { "image": "87.jfif", "id": "87" },
    { "image": "88.jfif", "id": "88" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl text-primary font-bold text-center", children: "Welcome to SWRV" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 127,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl text-primary font-normal text-center", children: "Reach the next billion" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 126,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 items-center mb-6 overflow-x-scroll no-scrollbar", children: data.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "block shrink-0 cursor-pointer", onClick: () => {
        navigator(`/home/user/${val.id}`);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: `/images/inf/${val.image}`, alt: "error", className: "rounded-md w-40 h-40" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 136,
        columnNumber: 29
      }, this) }, index, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 133,
        columnNumber: 25
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 130,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 125,
    columnNumber: 9
  }, this);
};
var EarnSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full rounded-xl flex flex-col md:flex-row bg-yellow-500 mt-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grow grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/cashgirl.png", alt: "error", className: "md:h-80" }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 150,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 149,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl text-black font-bold text-left", children: "To earn more money?" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 154,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-md text-black font-normal text-left md:w-80", children: "Search, apply for brands campaigns and create more great content." }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 155,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 153,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 152,
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
var SponsoredPosts = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faHeart, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 168,
        columnNumber: 101
      }, this),
      " Sponsored Posts "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 168,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "1500", category: "Consumer Electronics", image: "/images/brand/adidas.jpg", name: "Adidas", currency: "USD" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 170,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "2000", category: "Consumer Electronics", image: "/images/brand/furinicom.jpg", name: "Furinicom", currency: "USD" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 171,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "3000", category: "Consumer Electronics", image: "/images/brand/hilton.jpg", name: "Hilton", currency: "USD" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 172,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CampaginCard, { id: "55", weburl: "www.adidas.com", platforms: ["/images/media/instagram.png", "/images/media/youtube.png"], maxval: "2500", category: "Consumer Electronics", image: "/images/brand/lucent.jpg", name: "Lucent", currency: "USD" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 173,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 169,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 167,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 166,
    columnNumber: 9
  }, this);
};
var NewCampaign = () => {
  const [topChampaing, setTopChampaing] = (0, import_react2.useState)([]);
  const [campaignCards, setCampaignCards] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
    const fetchData = async () => {
      const apidata = await axios_default({
        method: "post",
        url: `${BaseUrl}/api/get-top-campaigns`
      });
      setTopChampaing(apidata.data.data.campaigns);
    };
    fetchData();
  }, []);
  (0, import_react2.useEffect)(() => {
    const createCampaignCards = async () => {
      const cards = await Promise.all(topChampaing.map(async (val, index) => {
        let platforms = [];
        for (let i = 0; i < val["platforms"].length; i++) {
          platforms.push(val["platforms"][i]["platformLogoUrl"]);
        }
        let campaignType = await getCampaignType(val["campaignTypeId"]);
        let image = val["brand"].length == 0 || val["brand"] == void 0 || val["brand"] == null || val["brand"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"] == "0" || val["brand"]["logo"] == void 0 || val["brand"]["logo"] == null || val["brand"]["logo"] == "" ? "/images/avatar/user.png" : val["brand"]["logo"];
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CampaginCard, { id: val.id, weburl: "www.adidas.com", platforms, maxval: val.costPerPost.split(".")[0], category: campaignType, image, name: val.name, currency: val["currency"]["code"] }, void 0, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 205,
          columnNumber: 25
        }, this) }, index, false, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 204,
          columnNumber: 21
        }, this);
      }));
      setCampaignCards(cards);
    };
    createCampaignCards();
  }, [topChampaing]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faIdBadge, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 217,
        columnNumber: 99
      }, this),
      " New Campaign "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 217,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1  place-items-center lgna khar:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: campaignCards }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 218,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 216,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 215,
    columnNumber: 9
  }, this);
};
var TopBrands = () => {
  const [topBrands, setTopBarnds] = (0, import_react2.useState)([]);
  const init = async () => {
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/get-top-brands`,
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
    setTopBarnds(apidata.data.data);
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faStar, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 251,
        columnNumber: 99
      }, this),
      " Top brands "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 251,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: topBrands.map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BrandCard, { id: val.id, email: val.email, image: val.logo, name: val.name, website: val.webUrl }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 257,
        columnNumber: 37
      }, this) }, index, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 256,
        columnNumber: 33
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 252,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 250,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 249,
    columnNumber: 9
  }, this);
};
var TopInfluencer = () => {
  const [topInfluencer, setTopInfluencer] = (0, import_react2.useState)([]);
  const init = async () => {
    const apidata = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/user-search`,
      data: { "role": 10 },
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
    for (let i = 0; i < 5; i++) {
      setTopInfluencer((prevdata) => [...prevdata, apidata.data.data[i]]);
    }
  };
  (0, import_react2.useEffect)(() => {
    init();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-2xl my-3 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faHeart, className: "text-md text-secondary" }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 297,
        columnNumber: 101
      }, this),
      " Top influencer "
    ] }, void 0, true, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 297,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 place-items-center ", children: topInfluencer.map((val, index) => {
      const avatar = val["pic"] == "0" || val["pic"] == null || val["pic"] == void 0 || val["pic"] == "" ? "/images/avatar/user.png" : val["pic"];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(topinfluencercard_default, { star: parseInt(val.rating), image: avatar, name: val.userName, currency: val.currency.code, dob: val.dob }, void 0, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 304,
        columnNumber: 37
      }, this) }, index, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 303,
        columnNumber: 33
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 298,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 296,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 295,
    columnNumber: 9
  }, this);
};
export {
  home_default as default
};
//# sourceMappingURL=/build/routes/home/index-2YGM5WX2.js.map
