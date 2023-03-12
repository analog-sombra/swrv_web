import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-AZD5HR3D.js";

// app/components/utils/buttont.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CusButton = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const clickfunc = () => {
    if (props.func != void 0) {
      props.func();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: clickfunc, className: `text-center py-2 ${(_a = props.margin) != null ? _a : "my-3"} rounded-lg font-normal ${(_b = props.background) != null ? _b : "bg-primary"} ${(_c = props.textColor) != null ? _c : "text-white"} ${(_d = props.textSize) != null ? _d : "text-md"} ${(_e = props.width) != null ? _e : "w-44"} ${(_f = props.background) != null ? _f : "bg-transparent"} ${(_g = props.border) != null ? _g : "border-2"} ${(_h = props.borderColor) != null ? _h : "border-transparent"}  ${(_i = props.height) != null ? _i : ""} ${(_j = props.extra) != null ? _j : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `${(_k = props.fontwidth) != null ? _k : "font-normal"}`, children: props.text }, void 0, false, {
    fileName: "app/components/utils/buttont.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/utils/buttont.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this);
};

export {
  CusButton
};
//# sourceMappingURL=/build/_shared/chunk-P2H577VJ.js.map
