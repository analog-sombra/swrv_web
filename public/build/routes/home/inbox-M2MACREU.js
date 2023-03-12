import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/inbox.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Invite = () => {
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const [msgIds, setMsgIds] = (0, import_react.useState)([]);
  const [messages, setMessages] = (0, import_react.useState)([]);
  const [user, setUser] = (0, import_react.useState)();
  const init = async () => {
    let req = {
      "search": { "fromToUser": import_react.useId }
    };
    const data = await axios_default.post(`${BaseUrl}/api/search-chat`, req);
    if (data.data.status == true) {
      for (let i = 0; i < data.data.data.length; i++) {
        let fromId = data.data.data[i].fromUser.id;
        let toId = data.data.data[i].toUser.id;
        if (fromId == userId) {
          if (!msgIds.includes(toId)) {
            setMsgIds([...msgIds, toId]);
            setMessages([...messages, data.data.data[i]]);
          }
        }
        if (toId == userId) {
          if (!msgIds.includes(fromId)) {
            setMsgIds([...msgIds, fromId]);
            setMessages([...messages, data.data.data[i]]);
          }
        }
      }
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 flex-col xl:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex lg:flex-row flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow-xl lg:w-80 p-2 max-h-screen overflow-y-scroll no-scrollbar min-h-screen", children: messages.map((val, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setUser({
            name: val.fromUser.id == userId ? val.toUser.name.toString().split("@")[0] : val.fromUser.name.toString().split("@")[0],
            avatar: val.fromUser.id == userId ? val.toUser.pic : val.fromUser.pic,
            userid: val.fromUser.id == userId ? val.toUser.id : val.fromUser.id,
            index: index.toString()
          });
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserMessage, { active: (user == null ? void 0 : user.index) == index.toString() ? true : false, name: val.fromUser.id == userId ? val.toUser.name.toString().split("@")[0] : val.fromUser.name.toString().split("@")[0], message: `${val.fromUser.id == userId ? "you: " : ""} ${val.comment}`, url: val.fromUser.id == userId ? val.toUser.pic : val.fromUser.pic }, void 0, false, {
          fileName: "app/routes/home/inbox.tsx",
          lineNumber: 84,
          columnNumber: 45
        }, this) }, index, false, {
          fileName: "app/routes/home/inbox.tsx",
          lineNumber: 74,
          columnNumber: 41
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 65,
        columnNumber: 25
      }, this),
      user != void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBox, { avatar: user.avatar, id: user.userid, userId, name: user.name, useravatar: userdata.user.pic }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 93,
        columnNumber: 49
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this),
    user != void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCard, { id: user.userid }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 97,
      columnNumber: 45
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 63,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 62,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
};
var inbox_default = Invite;
var UserMessage = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex w-full py-2 my-1 border-b-2 rounded-md ${props.active ? "bg-gray-200 px-4" : "border-slate-200"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.url, alt: "user images", className: "w-10 h-10 object-cover rounded-lg shrink-0" }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 119,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2" }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 120,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-medium  leading-none text-slate-800", children: props.name }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 122,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-normal leading-none text-slate-600", children: props.message }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 123,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 121,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 118,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 117,
    columnNumber: 9
  }, this);
};
var Message = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex items-start my-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `grow ${props.user ? "" : "hidden"}` }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 141,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.avatar, alt: "avatar", className: `w-10 h-10 rounded-md ${props.user ? "order-3" : ""}` }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 142,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-4 ${props.user ? "order-2" : ""}` }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 143,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4/5 bg-gray-200 rounded-md p-2 order-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-xs text-gray-700 font-normal ${props.user ? "text-right" : "text-left"}`, children: props.time }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 145,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-md text-gray-900 font-normal text-left ${props.user ? "text-right" : "text-left"}`, children: props.message }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 148,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 144,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 140,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 139,
    columnNumber: 9
  }, this);
};
var UserCard = (props) => {
  const [userdata, setUserdata] = (0, import_react.useState)(null);
  const init = async () => {
    const userdata2 = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/getuser`,
      data: { "id": props.id }
    });
    if (userdata2.data.status == true) {
      setUserdata(userdata2.data.data[0]);
    }
  };
  (0, import_react.useEffect)(() => {
    init();
  }, []);
  const navigator = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: userdata == void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold text-rose-500 p-4", children: "No user found" }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 182,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 181,
    columnNumber: 21
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl flex w-full xl:w-80 xl:flex-col flex-col sm:flex-row items-start p-4 xl:px-0 xl:pt-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-80 h-80 shrink-0 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: userdata.pic, alt: "error", className: "w-full h-80 object-cover rounded-lg" }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 187,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 186,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 mt-6 sm:mt-0 grow w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-semibold text-lg text-slate-800", children: userdata.userName.toString().split("@")[0] }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 190,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-semibold text-sm text-slate-600 mt-4", children: "Bio" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 192,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left font-normal text-sm text-slate-600 mt-4", children: userdata.bio }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 193,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
        navigator(`/home/branduser`);
      }, className: " mt-2 w-full py-2 text-center text-primary font-semibold text-lg bg-[#01FFF4] rounded-md", children: "View profile" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 195,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-slate-400 my-4 w-full" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 198,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 189,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 185,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 178,
    columnNumber: 9
  }, this);
};
var ChatBox = (props) => {
  const chatBoxRef = (0, import_react.useRef)(null);
  const chatText = (0, import_react.useRef)(null);
  const [message, setMessage] = (0, import_react.useState)([]);
  const [changedata, setChangeData] = (0, import_react.useState)(false);
  const init = async () => {
    setMessage([]);
    let user1 = {
      "search": {
        "fromUser": props.id,
        "toUser": props.userId
      }
    };
    let user2 = {
      "search": {
        "fromUser": props.userId,
        "toUser": props.id
      }
    };
    const user1data = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-chat`,
      data: user1
    });
    const user2data = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/search-chat`,
      data: user2
    });
    setMessage((prevState) => [...prevState, ...user1data.data.data, ...user2data.data.data]);
    setMessage((prevState) => prevState.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
  };
  (0, import_react.useEffect)(() => {
    var _a;
    chatBoxRef.current.scrollTop = (_a = chatBoxRef.current) == null ? void 0 : _a.scrollHeight;
    init();
  }, [changedata]);
  const sendMessage = async (msg) => {
    let req = {
      "campaignDraftId": "0",
      "fromUserId": props.userId,
      "toUserId": props.id,
      "comment": msg
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
    setChangeData(!changedata);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl w-full p-4 max-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: props.avatar, className: "w-10 h-10 rounded-md", alt: "avatar" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 309,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 310,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-semibold text-slate-900 ", children: props.name }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 311,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 308,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[2px] my-2 bg-slate-300" }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 313,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: chatBoxRef, className: "w-full h-full overflow-y-scroll grow no-scrollbar", children: message.reverse().map((val, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Message, { avatar: val.fromUser.id == props.userId ? props.useravatar : props.avatar, message: val.comment, time: val.updatedAt, user: val.fromUser.id == props.userId }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 319,
        columnNumber: 37
      }, this) }, index, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 318,
        columnNumber: 33
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 314,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " bg-gray-200 rounded-md px-2 py-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: chatText, type: "text", className: "py-1 w-full px-2 bg-transparent outline-none", placeholder: "type something" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 327,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 328,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-primary rounded-md text-white  text-md py-1 px-4 font-semibold", onClick: async () => {
        var _a, _b, _c, _d;
        if (((_a = chatText.current) == null ? void 0 : _a.value) == null || ((_b = chatText.current) == null ? void 0 : _b.value) == void 0 || ((_c = chatText.current) == null ? void 0 : _c.value) == "") {
        } else {
          await sendMessage((_d = chatText.current) == null ? void 0 : _d.value);
          chatText.current.value = "";
        }
      }, children: "SEND" }, void 0, false, {
        fileName: "app/routes/home/inbox.tsx",
        lineNumber: 329,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 326,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/inbox.tsx",
      lineNumber: 325,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 307,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/inbox.tsx",
    lineNumber: 306,
    columnNumber: 9
  }, this);
};
export {
  inbox_default as default
};
//# sourceMappingURL=/build/routes/home/inbox-M2MACREU.js.map
