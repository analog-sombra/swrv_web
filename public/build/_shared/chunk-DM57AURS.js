import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-I7DWLWVF.js";

// app/components/utils/buttont.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CusButton = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const clickfunc = () => {
    if (props.func != void 0) {
      props.func();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: clickfunc, className: `text-center py-2 ${(_a = props.margin) != null ? _a : "my-3"} rounded-lg font-normal ${(_b = props.background) != null ? _b : "bg-primary"} ${(_c = props.textColor) != null ? _c : "text-white"} ${(_d = props.textSize) != null ? _d : "text-md"} ${(_e = props.width) != null ? _e : "w-44"} ${(_f = props.background) != null ? _f : "bg-transparent"} ${(_g = props.border) != null ? _g : "border-2"} ${(_h = props.borderColor) != null ? _h : "border-transparent"} ${(_i = props.extra) != null ? _i : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `${(_j = props.fontwidth) != null ? _j : "font-normal"}`, children: props.text }, void 0, false, {
    fileName: "app/components/utils/buttont.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/buttont.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
};

export {
  CusButton
};
//# sourceMappingURL=/build/_shared/chunk-DM57AURS.js.map
