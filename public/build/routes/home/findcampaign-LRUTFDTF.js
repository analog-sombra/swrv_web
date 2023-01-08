import {
  CampaginCard
} from "/build/_shared/chunk-WIIM37XS.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import {
  FontAwesomeIcon,
  faSortDown,
  faTrash,
  require_prop_types
} from "/build/_shared/chunk-4MAHYGKM.js";
import "/build/_shared/chunk-CSMOQKLZ.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// node_modules/.pnpm/react-switch@7.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-switch/dist/index.dev.js
var require_index_dev = __commonJS({
  "node_modules/.pnpm/react-switch@7.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-switch/dist/index.dev.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    var PropTypes = require_prop_types();
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var uncheckedIcon = React.createElement("svg", {
      viewBox: "-2 -5 14 20",
      height: "100%",
      width: "100%",
      style: {
        position: "absolute",
        top: 0
      }
    }, React.createElement("path", {
      d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
      fill: "#fff",
      fillRule: "evenodd"
    }));
    var checkedIcon = React.createElement("svg", {
      height: "100%",
      width: "100%",
      viewBox: "-2 -5 17 21",
      style: {
        position: "absolute",
        top: 0
      }
    }, React.createElement("path", {
      d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
      fill: "#fff",
      fillRule: "evenodd"
    }));
    function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
      var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);
      if (relativePos === 0) {
        return offColor;
      }
      if (relativePos === 1) {
        return onColor;
      }
      var newColor = "#";
      for (var i = 1; i < 6; i += 2) {
        var offComponent = parseInt(offColor.substr(i, 2), 16);
        var onComponent = parseInt(onColor.substr(i, 2), 16);
        var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
        var newComponent = weightedValue.toString(16);
        if (newComponent.length === 1) {
          newComponent = "0" + newComponent;
        }
        newColor += newComponent;
      }
      return newColor;
    }
    function convertShorthandColor(color) {
      if (color.length === 7) {
        return color;
      }
      var sixDigitColor = "#";
      for (var i = 1; i < 4; i += 1) {
        sixDigitColor += color[i] + color[i];
      }
      return sixDigitColor;
    }
    function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
      var sixDigitOffColor = convertShorthandColor(offColor);
      var sixDigitOnColor = convertShorthandColor(onColor);
      return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
    }
    var hexColorPropType = function(props, propName, componentName) {
      var prop = props[propName];
      if (typeof prop !== "string" || prop[0] !== "#" || prop.length !== 4 && prop.length !== 7) {
        return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'");
      }
      return null;
    };
    function objectWithoutProperties(obj, exclude) {
      var target = {};
      for (var k in obj)
        if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
          target[k] = obj[k];
      return target;
    }
    var ReactSwitch2 = /* @__PURE__ */ function(Component) {
      function ReactSwitch3(props) {
        Component.call(this, props);
        var height = props.height;
        var width = props.width;
        var handleDiameter = props.handleDiameter;
        var checked = props.checked;
        this.$handleDiameter = handleDiameter || height - 2;
        this.$checkedPos = Math.max(width - height, width - (height + this.$handleDiameter) / 2);
        this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
        this.state = {
          $pos: checked ? this.$checkedPos : this.$uncheckedPos
        };
        this.$lastDragAt = 0;
        this.$lastKeyUpAt = 0;
        this.$onMouseDown = this.$onMouseDown.bind(this);
        this.$onMouseMove = this.$onMouseMove.bind(this);
        this.$onMouseUp = this.$onMouseUp.bind(this);
        this.$onTouchStart = this.$onTouchStart.bind(this);
        this.$onTouchMove = this.$onTouchMove.bind(this);
        this.$onTouchEnd = this.$onTouchEnd.bind(this);
        this.$onClick = this.$onClick.bind(this);
        this.$onInputChange = this.$onInputChange.bind(this);
        this.$onKeyUp = this.$onKeyUp.bind(this);
        this.$setHasOutline = this.$setHasOutline.bind(this);
        this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
        this.$getInputRef = this.$getInputRef.bind(this);
      }
      if (Component)
        ReactSwitch3.__proto__ = Component;
      ReactSwitch3.prototype = Object.create(Component && Component.prototype);
      ReactSwitch3.prototype.constructor = ReactSwitch3;
      ReactSwitch3.prototype.componentDidMount = function componentDidMount() {
        this.$isMounted = true;
      };
      ReactSwitch3.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.checked === this.props.checked) {
          return;
        }
        var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
        this.setState({
          $pos
        });
      };
      ReactSwitch3.prototype.componentWillUnmount = function componentWillUnmount() {
        this.$isMounted = false;
      };
      ReactSwitch3.prototype.$onDragStart = function $onDragStart(clientX) {
        this.$inputRef.focus();
        this.setState({
          $startX: clientX,
          $hasOutline: true,
          $dragStartingTime: Date.now()
        });
      };
      ReactSwitch3.prototype.$onDrag = function $onDrag(clientX) {
        var ref = this.state;
        var $startX = ref.$startX;
        var $isDragging = ref.$isDragging;
        var $pos = ref.$pos;
        var ref$1 = this.props;
        var checked = ref$1.checked;
        var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
        var mousePos = startPos + clientX - $startX;
        if (!$isDragging && clientX !== $startX) {
          this.setState({
            $isDragging: true
          });
        }
        var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos));
        if (newPos !== $pos) {
          this.setState({
            $pos: newPos
          });
        }
      };
      ReactSwitch3.prototype.$onDragStop = function $onDragStop(event) {
        var ref = this.state;
        var $pos = ref.$pos;
        var $isDragging = ref.$isDragging;
        var $dragStartingTime = ref.$dragStartingTime;
        var ref$1 = this.props;
        var checked = ref$1.checked;
        var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2;
        var prevPos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
        this.setState({
          $pos: prevPos
        });
        var timeSinceStart = Date.now() - $dragStartingTime;
        var isSimulatedClick = !$isDragging || timeSinceStart < 250;
        var isDraggedHalfway = checked && $pos <= halfwayCheckpoint || !checked && $pos >= halfwayCheckpoint;
        if (isSimulatedClick || isDraggedHalfway) {
          this.$onChange(event);
        }
        if (this.$isMounted) {
          this.setState({
            $isDragging: false,
            $hasOutline: false
          });
        }
        this.$lastDragAt = Date.now();
      };
      ReactSwitch3.prototype.$onMouseDown = function $onMouseDown(event) {
        event.preventDefault();
        if (typeof event.button === "number" && event.button !== 0) {
          return;
        }
        this.$onDragStart(event.clientX);
        window.addEventListener("mousemove", this.$onMouseMove);
        window.addEventListener("mouseup", this.$onMouseUp);
      };
      ReactSwitch3.prototype.$onMouseMove = function $onMouseMove(event) {
        event.preventDefault();
        this.$onDrag(event.clientX);
      };
      ReactSwitch3.prototype.$onMouseUp = function $onMouseUp(event) {
        this.$onDragStop(event);
        window.removeEventListener("mousemove", this.$onMouseMove);
        window.removeEventListener("mouseup", this.$onMouseUp);
      };
      ReactSwitch3.prototype.$onTouchStart = function $onTouchStart(event) {
        this.$checkedStateFromDragging = null;
        this.$onDragStart(event.touches[0].clientX);
      };
      ReactSwitch3.prototype.$onTouchMove = function $onTouchMove(event) {
        this.$onDrag(event.touches[0].clientX);
      };
      ReactSwitch3.prototype.$onTouchEnd = function $onTouchEnd(event) {
        event.preventDefault();
        this.$onDragStop(event);
      };
      ReactSwitch3.prototype.$onInputChange = function $onInputChange(event) {
        if (Date.now() - this.$lastDragAt > 50) {
          this.$onChange(event);
          if (Date.now() - this.$lastKeyUpAt > 50) {
            if (this.$isMounted) {
              this.setState({
                $hasOutline: false
              });
            }
          }
        }
      };
      ReactSwitch3.prototype.$onKeyUp = function $onKeyUp() {
        this.$lastKeyUpAt = Date.now();
      };
      ReactSwitch3.prototype.$setHasOutline = function $setHasOutline() {
        this.setState({
          $hasOutline: true
        });
      };
      ReactSwitch3.prototype.$unsetHasOutline = function $unsetHasOutline() {
        this.setState({
          $hasOutline: false
        });
      };
      ReactSwitch3.prototype.$getInputRef = function $getInputRef(el) {
        this.$inputRef = el;
      };
      ReactSwitch3.prototype.$onClick = function $onClick(event) {
        event.preventDefault();
        this.$inputRef.focus();
        this.$onChange(event);
        if (this.$isMounted) {
          this.setState({
            $hasOutline: false
          });
        }
      };
      ReactSwitch3.prototype.$onChange = function $onChange(event) {
        var ref = this.props;
        var checked = ref.checked;
        var onChange = ref.onChange;
        var id = ref.id;
        onChange(!checked, event, id);
      };
      ReactSwitch3.prototype.render = function render() {
        var ref = this.props;
        var checked = ref.checked;
        var disabled = ref.disabled;
        var className = ref.className;
        var offColor = ref.offColor;
        var onColor = ref.onColor;
        var offHandleColor = ref.offHandleColor;
        var onHandleColor = ref.onHandleColor;
        var checkedIcon2 = ref.checkedIcon;
        var uncheckedIcon2 = ref.uncheckedIcon;
        var checkedHandleIcon = ref.checkedHandleIcon;
        var uncheckedHandleIcon = ref.uncheckedHandleIcon;
        var boxShadow = ref.boxShadow;
        var activeBoxShadow = ref.activeBoxShadow;
        var height = ref.height;
        var width = ref.width;
        var borderRadius = ref.borderRadius;
        ref.handleDiameter;
        var rest$1 = objectWithoutProperties(ref, ["checked", "disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "checkedHandleIcon", "uncheckedHandleIcon", "boxShadow", "activeBoxShadow", "height", "width", "borderRadius", "handleDiameter"]);
        var rest = rest$1;
        var ref$1 = this.state;
        var $pos = ref$1.$pos;
        var $isDragging = ref$1.$isDragging;
        var $hasOutline = ref$1.$hasOutline;
        var rootStyle = {
          position: "relative",
          display: "inline-block",
          textAlign: "left",
          opacity: disabled ? 0.5 : 1,
          direction: "ltr",
          borderRadius: height / 2,
          WebkitTransition: "opacity 0.25s",
          MozTransition: "opacity 0.25s",
          transition: "opacity 0.25s",
          touchAction: "none",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none"
        };
        var backgroundStyle = {
          height,
          width,
          margin: Math.max(0, (this.$handleDiameter - height) / 2),
          position: "relative",
          background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
          borderRadius: typeof borderRadius === "number" ? borderRadius : height / 2,
          cursor: disabled ? "default" : "pointer",
          WebkitTransition: $isDragging ? null : "background 0.25s",
          MozTransition: $isDragging ? null : "background 0.25s",
          transition: $isDragging ? null : "background 0.25s"
        };
        var checkedIconStyle = {
          height,
          width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
          position: "relative",
          opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
          pointerEvents: "none",
          WebkitTransition: $isDragging ? null : "opacity 0.25s",
          MozTransition: $isDragging ? null : "opacity 0.25s",
          transition: $isDragging ? null : "opacity 0.25s"
        };
        var uncheckedIconStyle = {
          height,
          width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
          position: "absolute",
          opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
          right: 0,
          top: 0,
          pointerEvents: "none",
          WebkitTransition: $isDragging ? null : "opacity 0.25s",
          MozTransition: $isDragging ? null : "opacity 0.25s",
          transition: $isDragging ? null : "opacity 0.25s"
        };
        var handleStyle = {
          height: this.$handleDiameter,
          width: this.$handleDiameter,
          background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
          display: "inline-block",
          cursor: disabled ? "default" : "pointer",
          borderRadius: typeof borderRadius === "number" ? borderRadius - 1 : "50%",
          position: "absolute",
          transform: "translateX(" + $pos + "px)",
          top: Math.max(0, (height - this.$handleDiameter) / 2),
          outline: 0,
          boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
          border: 0,
          WebkitTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
          MozTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
          transition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
        };
        var uncheckedHandleIconStyle = {
          height: this.$handleDiameter,
          width: this.$handleDiameter,
          opacity: Math.max((1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos) - 0.5) * 2, 0),
          position: "absolute",
          left: 0,
          top: 0,
          pointerEvents: "none",
          WebkitTransition: $isDragging ? null : "opacity 0.25s",
          MozTransition: $isDragging ? null : "opacity 0.25s",
          transition: $isDragging ? null : "opacity 0.25s"
        };
        var checkedHandleIconStyle = {
          height: this.$handleDiameter,
          width: this.$handleDiameter,
          opacity: Math.max((($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos) - 0.5) * 2, 0),
          position: "absolute",
          left: 0,
          top: 0,
          pointerEvents: "none",
          WebkitTransition: $isDragging ? null : "opacity 0.25s",
          MozTransition: $isDragging ? null : "opacity 0.25s",
          transition: $isDragging ? null : "opacity 0.25s"
        };
        var inputStyle = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: 1,
          margin: -1,
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: 1
        };
        return React.createElement("div", {
          className,
          style: rootStyle
        }, React.createElement("div", {
          className: "react-switch-bg",
          style: backgroundStyle,
          onClick: disabled ? null : this.$onClick,
          onMouseDown: function(e) {
            return e.preventDefault();
          }
        }, checkedIcon2 && React.createElement("div", {
          style: checkedIconStyle
        }, checkedIcon2), uncheckedIcon2 && React.createElement("div", {
          style: uncheckedIconStyle
        }, uncheckedIcon2)), React.createElement("div", {
          className: "react-switch-handle",
          style: handleStyle,
          onClick: function(e) {
            return e.preventDefault();
          },
          onMouseDown: disabled ? null : this.$onMouseDown,
          onTouchStart: disabled ? null : this.$onTouchStart,
          onTouchMove: disabled ? null : this.$onTouchMove,
          onTouchEnd: disabled ? null : this.$onTouchEnd,
          onTouchCancel: disabled ? null : this.$unsetHasOutline
        }, uncheckedHandleIcon && React.createElement("div", {
          style: uncheckedHandleIconStyle
        }, uncheckedHandleIcon), checkedHandleIcon && React.createElement("div", {
          style: checkedHandleIconStyle
        }, checkedHandleIcon)), React.createElement("input", _extends({}, {
          type: "checkbox",
          role: "switch",
          "aria-checked": checked,
          checked,
          disabled,
          style: inputStyle
        }, rest, {
          ref: this.$getInputRef,
          onFocus: this.$setHasOutline,
          onBlur: this.$unsetHasOutline,
          onKeyUp: this.$onKeyUp,
          onChange: this.$onInputChange
        })));
      };
      return ReactSwitch3;
    }(React.Component);
    ReactSwitch2.propTypes = {
      checked: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      offColor: hexColorPropType,
      onColor: hexColorPropType,
      offHandleColor: hexColorPropType,
      onHandleColor: hexColorPropType,
      handleDiameter: PropTypes.number,
      uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
      checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
      boxShadow: PropTypes.string,
      borderRadius: PropTypes.number,
      activeBoxShadow: PropTypes.string,
      uncheckedHandleIcon: PropTypes.element,
      checkedHandleIcon: PropTypes.element,
      height: PropTypes.number,
      width: PropTypes.number,
      id: PropTypes.string,
      className: PropTypes.string
    };
    ReactSwitch2.defaultProps = {
      disabled: false,
      offColor: "#888",
      onColor: "#080",
      offHandleColor: "#fff",
      onHandleColor: "#fff",
      uncheckedIcon,
      checkedIcon,
      boxShadow: null,
      activeBoxShadow: "0 0 2px 3px #3bf",
      height: 28,
      width: 56
    };
    exports["default"] = ReactSwitch2;
  }
});

// node_modules/.pnpm/react-switch@7.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-switch/index.js
var require_react_switch = __commonJS({
  "node_modules/.pnpm/react-switch@7.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-switch/index.js"(exports, module) {
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_index_dev();
    }
  }
});

// app/routes/home/findcampaign.tsx
var import_react_switch = __toESM(require_react_switch());
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FindCampaign = () => {
  const [active, setActive] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-6 md:flex-row flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black text-left mt-4", children: "Find campaign" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 15,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-normal text-black text-left", children: "Here you can manage all the campaigns that you are participating in." }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block md:grow" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { height: "h-12", text: "Campaign", fontwidth: "font-bold", background: "bg-cyan-300", textColor: "text-black" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 20,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 21,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { height: "h-12", text: "Brand", fontwidth: "font-bold", background: "bg-gray-300", textColor: "text-gray-600" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 22,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl shadow-xl p-6 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black text-xl text-left font-bold", children: "Filter" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 28,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", children: "Save Filter" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 30,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 31,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center", children: [
          "Saved filter ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 32,
            columnNumber: 124
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 32,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Select" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 36,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2", placeholder: "Unboxing or Review Posts" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 37,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_switch.default, { onChange: () => setActive(!active), checked: active, checkedIcon: false, uncheckedIcon: false, onColor: "#03125E" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 39,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary font-bold text-ld ml-2", children: "Show only active campaigns" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 40,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 38,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 35,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Channels" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 44,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/instagram.png", alt: "error", className: "w-8 h-8 rounded-full" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 47,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 46,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/facebook.png", alt: "error", className: "w-8 h-8  rounded-full" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 50,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 49,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/youtube.png", alt: "error", className: "w-8 h-8  rounded-full" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 53,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 52,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/snapchat.png", alt: "error", className: "w-8 h-8  rounded-full" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 56,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 55,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/media/twitter.png", alt: "error", className: "w-8 h-8  rounded-full" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 59,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 58,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 45,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary text-lg font-bold mb", children: "Country" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 64,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-primary text-md font-semibold", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faSortDown }, void 0, false, {
                fileName: "app/routes/home/findcampaign.tsx",
                lineNumber: 67,
                columnNumber: 85
              }, this),
              " Advanced filter "
            ] }, void 0, true, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 67,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 68,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { className: "text-primary text-2xl", icon: faTrash }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 69,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 70,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Search", textColor: "text-white", background: "bg-primary", fontwidth: "font-bold" }, void 0, false, {
              fileName: "app/routes/home/findcampaign.tsx",
              lineNumber: 71,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/findcampaign.tsx",
            lineNumber: 66,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/findcampaign.tsx",
          lineNumber: 63,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 34,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchedCampaign, {}, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};
var findcampaign_default = FindCampaign;
var SearchedCampaign = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl my-6 shadow-xl p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60 text-md font-bold text-primary p-2 my-2", children: "Found: 06 Campaigns " }, void 0, false, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 89,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 91,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 92,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/hilton.jpg", name: "Hilton" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 93,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/lucent.jpg", name: "Lucent" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 94,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/adidas.jpg", name: "Adidas" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CampaginCard, { image: "/images/brand/furinicom.jpg", name: "Furinicom" }, void 0, false, {
        fileName: "app/routes/home/findcampaign.tsx",
        lineNumber: 96,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/findcampaign.tsx",
      lineNumber: 90,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 88,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/findcampaign.tsx",
    lineNumber: 87,
    columnNumber: 9
  }, this);
};
export {
  findcampaign_default as default
};
//# sourceMappingURL=/build/routes/home/findcampaign-LRUTFDTF.js.map
