import {
  firstinput_default
} from "/build/_shared/chunk-OATAN4VF.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-4XW2F6EJ.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import {
  FontAwesomeIcon,
  faAdd,
  faChevronRight
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  Form,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/routes/home/profilecomplete/forthpage.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ForthPage = () => {
  const userdata = useLoaderData();
  const userId = userdata.user.id;
  const country = userdata.country;
  const gender = ["MALE", "FEMALE", "TRANSGENDER"];
  const isBrand = userdata.user.role["code"] == "50" ? true : false;
  const [selCountry, setSelCountry] = (0, import_react2.useState)([]);
  const [con, setcon] = (0, import_react2.useState)(false);
  const [selGender, setSelGender] = (0, import_react2.useState)([]);
  const [gen, setgen] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)("");
  const [cityerror, setCityerror] = (0, import_react2.useState)(null);
  const [citybox, setCitybox] = (0, import_react2.useState)(false);
  const [searchcity, setSearchcity] = (0, import_react2.useState)([]);
  const [selectedcity, setSelectedctiy] = (0, import_react2.useState)(null);
  const [contactnumber, setContactnumber] = (0, import_react2.useState)();
  const handelcontent = (e) => {
    setContactnumber(e.target.value.replace(/\D/g, ""));
  };
  let cityref = (0, import_react2.useRef)(null);
  const getCity = async (city) => {
    const data = await axios_default.post(`${BaseUrl}/api/get-city`, { "search": city });
    setSearchcity(data.data.data);
  };
  const setIndex = firstinput_default((state) => state.setIndex);
  const navigate = useNavigate();
  const [check, setCheck] = (0, import_react2.useState)(false);
  const handleOnChange = () => {
    setCheck(!check);
  };
  const nextButton = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-md w-80 rounded-lg p-4", children: searchcity.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: "No city found with this name" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 83,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-2 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", onClick: () => {
        setCitybox(false);
      }, children: "Close" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 84,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 82,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-72 overflow-y-scroll no-scrollbar", children: searchcity.map((value, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        setSelectedctiy(value);
        setCitybox(false);
        cityref.current.value = "";
      }, className: "my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500", children: [
        value["name"],
        " - ",
        value["code"]
      ] }, index, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 94,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 93,
        columnNumber: 45
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 89,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 79,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg mt-4", children: "Country" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 111,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selCountry.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: `${value["name"]} - [${value["code"]}]` }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 117,
            columnNumber: 45
          }, this) }, i, false, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 116,
            columnNumber: 41
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 113,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 124,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
          setcon(true);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 128,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 125,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 112,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: country.map((val, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { onClick: () => {
            if (selCountry.includes(val)) {
              let addcur = selCountry.filter((data) => data != val);
              setSelCountry(addcur);
            } else {
              setSelCountry([val]);
            }
          }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: [
            val["code"],
            " - ",
            val["name"]
          ] }, i, true, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 136,
            columnNumber: 45
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 133,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setcon(false);
        }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 147,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 132,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 131,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Gender" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 155,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar", children: selGender.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-black font-semibold text-center w-40", children: value }, void 0, false, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 161,
            columnNumber: 45
          }, this) }, i, false, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 160,
            columnNumber: 41
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 157,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 168,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => {
          setgen(true);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 172,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 169,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 156,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${gen ? "" : "hidden"} grid place-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-10 cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-80 overflow-y-scroll no-scrollbar w-80", children: gender.map((val, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { onClick: () => {
            if (selGender.includes(val)) {
              let addcur = selGender.filter((data) => data != val);
              setSelGender(addcur);
            } else {
              setSelGender([val]);
            }
          }, className: `text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selGender.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`, children: val }, i, false, {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 180,
            columnNumber: 45
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 177,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setgen(false);
        }, className: "my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center", children: "Close" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 191,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 176,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 175,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "City" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 198,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-[#EEEEEE] rounded-md flex p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: cityref, className: "h-full w-full outline-none focus:border-gray-300 bg-transparent" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 201,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 200,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer", onClick: () => {
          var _a, _b, _c, _d, _e;
          if (((_a = cityref.current) == null ? void 0 : _a.value) == null || ((_b = cityref.current) == null ? void 0 : _b.value) == void 0 || ((_c = cityref.current) == null ? void 0 : _c.value) == "") {
            setCityerror("Enter the city name");
          } else {
            setCitybox(true);
            setCityerror(null);
            getCity((_e = (_d = cityref.current) == null ? void 0 : _d.value) != null ? _e : "");
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faChevronRight }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 212,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 203,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 199,
        columnNumber: 25
      }, this),
      cityerror == "" || cityerror == null || cityerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: cityerror }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 216,
        columnNumber: 29
      }, this),
      selectedcity == "" || selectedcity == null || selectedcity == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4", children: [
        selectedcity["name"],
        " - ",
        selectedcity["code"]
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 219,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black text-left font-normal text-lg  mt-4", children: "Phone number" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 221,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-black font-normal text-md mr-4", children: selectedcity == null ? 0 : selectedcity["country"]["isd"] }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 223,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: handelcontent, value: contactnumber, type: "text", maxLength: 10, className: "w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 224,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 222,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            checked: check,
            onChange: handleOnChange,
            type: "checkbox",
            name: "check2"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home/profilecomplete/forthpage.tsx",
            lineNumber: 228,
            columnNumber: 33
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 227,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-left text-[10px] text-black font-normal", children: "The above details are true and correct" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 231,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 226,
        columnNumber: 25
      }, this),
      error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 234,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: async () => {
        if (selCountry.length == 0) {
          setError("Select the country");
        } else if (gender.length == 0) {
          setError("Select your gender");
        } else if (selectedcity == null || selCountry == void 0) {
          setError("Select the city");
        } else if (contactnumber == null || contactnumber == void 0 || contactnumber == 0) {
          setError("Fill the contact number");
        } else if (contactnumber.toString().length != 10) {
          setError("Enter a 10 degit valid contact number");
        } else if (!check) {
          setError("Check the box in order to procide");
        } else {
          let req = {
            "id": userId,
            "cityId": selectedcity["id"],
            "userContact": contactnumber,
            "userGender": selGender[0] == "MALE" ? "1" : selGender[0] == "FEMALE" ? "2" : "3"
          };
          const data = await axios_default({
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
              "Accept": "*"
            }
          });
          if (data.data.status == false) {
            return setError(data.data.message);
          }
          setIndex(4);
          nextButton.current.click();
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", width: "w-full", background: "bg-primary", fontwidth: "font-bold" }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 287,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 236,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: userId.toString() }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 290,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "address", value: isBrand ? "/home/profilecomplete/fifthpage" : "/home" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 291,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: nextButton, name: "submit", children: "Submit" }, void 0, false, {
          fileName: "app/routes/home/profilecomplete/forthpage.tsx",
          lineNumber: 292,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profilecomplete/forthpage.tsx",
        lineNumber: 289,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 109,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 108,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home/profilecomplete/forthpage.tsx",
      lineNumber: 107,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profilecomplete/forthpage.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, this);
};
var forthpage_default = ForthPage;
export {
  forthpage_default as default
};
//# sourceMappingURL=/build/routes/home/profilecomplete/forthpage-J2XEX234.js.map
