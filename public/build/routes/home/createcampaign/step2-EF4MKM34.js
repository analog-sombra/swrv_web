import {
  createcampaign_default
} from "/build/_shared/chunk-KXH2FK5W.js";
import {
  CusButton
} from "/build/_shared/chunk-P2H577VJ.js";
import "/build/_shared/chunk-4XW2F6EJ.js";
import "/build/_shared/chunk-3KIOMRCQ.js";
import {
  FontAwesomeIcon,
  faAdd,
  faCheck,
  faCircleXmark,
  faPaperclip,
  faRemove
} from "/build/_shared/chunk-DNQX6AAQ.js";
import "/build/_shared/chunk-3PCYEHWB.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PCUSXUQ3.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV2(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV2(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/.pnpm/react-simple-star-rating@5.1.7_biqbaboplfbrettd7655fr4n2y/node_modules/react-simple-star-rating/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/react-simple-star-rating@5.1.7_biqbaboplfbrettd7655fr4n2y/node_modules/react-simple-star-rating/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var e = require_jsx_runtime();
    var t = require_react();
    var o = function() {
      return o = Object.assign || function(e2) {
        for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
          for (var i2 in t2 = arguments[o2])
            Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
        return e2;
      }, o.apply(this, arguments);
    };
    function n(e2, t2, o2) {
      if (o2 || 2 === arguments.length)
        for (var n2, i2 = 0, r2 = t2.length; i2 < r2; i2++)
          !n2 && i2 in t2 || (n2 || (n2 = Array.prototype.slice.call(t2, 0, i2)), n2[i2] = t2[i2]);
      return e2.concat(n2 || Array.prototype.slice.call(t2));
    }
    function i(t2) {
      var n2 = t2.size, i2 = void 0 === n2 ? 25 : n2, r2 = t2.SVGstrokeColor, l2 = void 0 === r2 ? "currentColor" : r2, a2 = t2.SVGstorkeWidth, s2 = void 0 === a2 ? 0 : a2, c2 = t2.SVGclassName, d2 = void 0 === c2 ? "star-svg" : c2, u2 = t2.SVGstyle;
      return e.jsx("svg", o({ className: d2, style: u2, stroke: l2, fill: "currentColor", strokeWidth: s2, viewBox: "0 0 24 24", width: i2, height: i2, xmlns: "http://www.w3.org/2000/svg" }, { children: e.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }));
    }
    function r(e2, t2) {
      switch (t2.type) {
        case "PointerMove":
          return o(o({}, e2), { hoverValue: t2.payload, hoverIndex: t2.index });
        case "PointerLeave":
          return o(o({}, e2), { ratingValue: e2.ratingValue, hoverIndex: 0, hoverValue: null });
        case "MouseClick":
          return o(o({}, e2), { valueIndex: e2.hoverIndex, ratingValue: t2.payload });
        default:
          return e2;
      }
    }
    var l = "style-module_starRatingWrap__q-lJC";
    var a = "style-module_simpleStarRating__nWUxf";
    var s = "style-module_fillIcons__6---A";
    var c = "style-module_emptyIcons__Bg-FZ";
    var d = "style-module_tooltip__tKc3i";
    function u() {
      return "undefined" != typeof window && window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window || "undefined" != typeof navigator && navigator.maxTouchPoints > 0;
    }
    !function(e2, t2) {
      void 0 === t2 && (t2 = {});
      var o2 = t2.insertAt;
      if (e2 && "undefined" != typeof document) {
        var n2 = document.head || document.getElementsByTagName("head")[0], i2 = document.createElement("style");
        i2.type = "text/css", "top" === o2 && n2.firstChild ? n2.insertBefore(i2, n2.firstChild) : n2.appendChild(i2), i2.styleSheet ? i2.styleSheet.cssText = e2 : i2.appendChild(document.createTextNode(e2));
      }
    }(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"), exports.Rating = function(v) {
      var p, f, h = v.onClick, y = v.onPointerMove, m = v.onPointerEnter, g = v.onPointerLeave, x = v.initialValue, _ = void 0 === x ? 0 : x, C = v.iconsCount, w = void 0 === C ? 5 : C, V = v.size, k = void 0 === V ? 40 : V, S = v.readonly, b = void 0 !== S && S, M = v.rtl, G = void 0 !== M && M, I = v.customIcons, N = void 0 === I ? [] : I, j = v.allowFraction, P = void 0 !== j && j, A = v.style, L = v.className, R = void 0 === L ? "react-simple-star-rating" : L, T = v.transition, W = void 0 !== T && T, z = v.allowHover, B = void 0 === z || z, E = v.disableFillHover, F = void 0 !== E && E, q = v.fillIcon, O = void 0 === q ? null : q, H = v.fillColor, J = void 0 === H ? "#ffbc0b" : H, K = v.fillColorArray, U = void 0 === K ? [] : K, Z = v.fillStyle, D = v.fillClassName, X = void 0 === D ? "filled-icons" : D, Y = v.emptyIcon, Q = void 0 === Y ? null : Y, $ = v.emptyColor, ee = void 0 === $ ? "#cccccc" : $, te = v.emptyStyle, oe = v.emptyClassName, ne = void 0 === oe ? "empty-icons" : oe, ie = v.allowTitleTag, re = void 0 === ie || ie, le = v.showTooltip, ae = void 0 !== le && le, se = v.tooltipDefaultText, ce = void 0 === se ? "Your Rate" : se, de = v.tooltipArray, ue = void 0 === de ? [] : de, ve = v.tooltipStyle, pe = v.tooltipClassName, fe = void 0 === pe ? "react-simple-star-rating-tooltip" : pe, he = v.SVGclassName, ye = void 0 === he ? "star-svg" : he, me = v.titleSeparator, ge = void 0 === me ? "out of" : me, xe = v.SVGstyle, _e = v.SVGstorkeWidth, Ce = void 0 === _e ? 0 : _e, we = v.SVGstrokeColor, Ve = void 0 === we ? "currentColor" : we, ke = t.useReducer(r, { hoverIndex: 0, valueIndex: 0, ratingValue: _, hoverValue: null }), Se = ke[0], be = Se.ratingValue, Me = Se.hoverValue, Ge = Se.hoverIndex, Ie = Se.valueIndex, Ne = ke[1];
      t.useEffect(function() {
        _ && Ne({ type: "MouseClick", payload: 0 });
      }, [_]);
      var je = t.useMemo(function() {
        return P ? 2 * w : w;
      }, [P, w]), Pe = t.useMemo(function() {
        return _ > je ? 0 : P || Math.floor(_) === _ ? Math.round(_ / w * 100) : 2 * Math.ceil(_) * 10;
      }, [P, _, w, je]), Ae = t.useMemo(function() {
        return (P ? 2 * _ - 1 : _ - 1) || 0;
      }, [P, _]), Le = t.useCallback(function(e2) {
        return w % 2 != 0 ? e2 / 2 / 10 : e2 * w / 100;
      }, [w]), Re = function(e2) {
        for (var t2 = e2.clientX, o2 = e2.currentTarget.children[0].getBoundingClientRect(), n2 = o2.left, i2 = o2.right, r2 = o2.width, l2 = G ? i2 - t2 : t2 - n2, a2 = je, s2 = Math.round(r2 / je), c2 = 0; c2 <= je; c2 += 1)
          if (l2 <= s2 * c2) {
            a2 = 0 === c2 && l2 < s2 ? 0 : c2;
            break;
          }
        var d2 = a2 - 1;
        a2 > 0 && (Ne({ type: "PointerMove", payload: 100 * a2 / je, index: d2 }), y && Me && y(Le(Me), d2, e2));
      }, Te = function(e2) {
        Me && (Ne({ type: "MouseClick", payload: Me }), h && h(Le(Me), Ge, e2));
      }, We = t.useMemo(function() {
        if (B) {
          if (F) {
            var e2 = be && be || Pe;
            return Me && Me > e2 ? Me : e2;
          }
          return Me && Me || be && be || Pe;
        }
        return be && be || Pe;
      }, [B, F, Me, be, Pe]);
      t.useEffect(function() {
        ue.length > je && console.error("tooltipArray Array length is bigger then Icons Count length.");
      }, [ue.length, je]);
      var ze = t.useCallback(function(e2) {
        return Me && e2[Ge] || be && e2[Ie] || _ && e2[Ae];
      }, [Me, Ge, be, Ie, _, Ae]), Be = t.useMemo(function() {
        return Me && Le(Me) || be && Le(be) || _ && Le(Pe);
      }, [Me, Le, be, _, Pe]);
      return e.jsxs("span", o({ className: l, style: { direction: "".concat(G ? "rtl" : "ltr") } }, { children: [e.jsxs("span", o({ className: "".concat(a, " ").concat(R), style: o({ cursor: b ? "" : "pointer" }, A), onPointerMove: b ? void 0 : Re, onPointerEnter: b ? void 0 : function(e2) {
        m && m(e2), u() && Re(e2);
      }, onPointerLeave: b ? void 0 : function(e2) {
        u() && Te(), Ne({ type: "PointerLeave" }), g && g(e2);
      }, onClick: b ? void 0 : Te, "aria-hidden": "true" }, { children: [e.jsx("span", o({ className: "".concat(c, " ").concat(ne), style: o({ color: ee }, te) }, { children: n([], Array(w), true).map(function(o2, n2) {
        var r2;
        return e.jsx(t.Fragment, { children: (null === (r2 = N[n2]) || void 0 === r2 ? void 0 : r2.icon) || Q || e.jsx(i, { SVGclassName: ye, SVGstyle: xe, SVGstorkeWidth: Ce, SVGstrokeColor: Ve, size: k }) }, n2);
      }) })), e.jsx("span", o({ className: "".concat(s, " ").concat(X), style: o((p = {}, p[G ? "right" : "left"] = 0, p.color = ze(U) || J, p.transition = W ? "width .2s ease, color .2s ease" : "", p.width = "".concat(We, "%"), p), Z), title: re ? "".concat(Be, " ").concat(ge, " ").concat(w) : void 0 }, { children: n([], Array(w), true).map(function(o2, n2) {
        var r2;
        return e.jsx(t.Fragment, { children: (null === (r2 = N[n2]) || void 0 === r2 ? void 0 : r2.icon) || O || e.jsx(i, { SVGclassName: ye, SVGstyle: xe, SVGstorkeWidth: Ce, SVGstrokeColor: Ve, size: k }) }, n2);
      }) }))] })), ae && e.jsx("span", o({ className: "".concat(d, " ").concat(fe), style: o((f = {}, f[G ? "marginRight" : "marginLeft"] = 20, f), ve) }, { children: (ue.length > 0 ? ze(ue) : Be) || ce }))] }));
    };
  }
});

// app/routes/home/createcampaign/step2.tsx
var import_react2 = __toESM(require_react());
var import_react_simple_star_rating = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Step2 = () => {
  const mediatype = ["Post", "Story", "Reel", "Video", "Audio"];
  const data = useLoaderData();
  const navigator2 = useNavigate();
  const campaginType = createcampaign_default((state) => state.campaignTypeId);
  const [error, setError] = (0, import_react2.useState)(null);
  const mendtionText = (0, import_react2.useRef)(null);
  const [menerror, setMenError] = (0, import_react2.useState)(null);
  const [addmendtion, setAddMendtion] = (0, import_react2.useState)(false);
  const mendtion = createcampaign_default((state) => state.mendtion);
  const removeMendtion = createcampaign_default((state) => state.removeMeddtion);
  const clearMendtion = createcampaign_default((state) => state.clearMendtion);
  const addMendtion = createcampaign_default((state) => state.addMendtion);
  const hashtagText = (0, import_react2.useRef)(null);
  const [hasherror, setHashError] = (0, import_react2.useState)(null);
  const [addhashtag, setAddHashtag] = (0, import_react2.useState)(false);
  const hashtag = createcampaign_default((state) => state.hashtag);
  const removeHashtag = createcampaign_default((state) => state.removeHashtag);
  const clearHashtag = createcampaign_default((state) => state.clearHashtag);
  const addHashtag = createcampaign_default((state) => state.addHashtag);
  const dosText = (0, import_react2.useRef)(null);
  const [doserror, setDosError] = (0, import_react2.useState)(null);
  const [adddos, setAddDos] = (0, import_react2.useState)(false);
  const dos = createcampaign_default((state) => state.dos);
  const removeDos = createcampaign_default((state) => state.removeDos);
  const addDos = createcampaign_default((state) => state.addDos);
  const dontsText = (0, import_react2.useRef)(null);
  const [dontserror, setDontsError] = (0, import_react2.useState)(null);
  const [adddonts, setAddDonts] = (0, import_react2.useState)(false);
  const donts = createcampaign_default((state) => state.donts);
  const removeDonts = createcampaign_default((state) => state.removeDonts);
  const addDonts = createcampaign_default((state) => state.addDonts);
  const inputFile = (0, import_react2.useRef)(null);
  const [pdferror, setPdferror] = (0, import_react2.useState)(null);
  const pdfFile = createcampaign_default((state) => state.pdffile);
  const addPdfFile = createcampaign_default((state) => state.addPdfFile);
  const platform = createcampaign_default((state) => state.platform);
  const setPlatform = createcampaign_default((state) => state.setPlatform);
  const media = createcampaign_default((state) => state.media);
  const setMedia = createcampaign_default((state) => state.setMedia);
  const campinfo = (0, import_react2.useRef)(null);
  const campaignInfo = createcampaign_default((state) => state.campaignInfo);
  const setCampaignInfo = createcampaign_default((state) => state.setCampaignInfo);
  const affLink = (0, import_react2.useRef)(null);
  const affiliatedLinks = createcampaign_default((state) => state.affiliatedLinks);
  const setAffiliatedLinks = createcampaign_default((state) => state.setAffiliatedLinks);
  const discCopon = (0, import_react2.useRef)(null);
  const discoutCoupon = createcampaign_default((state) => state.discoutCoupon);
  const setDiscoutCoupon = createcampaign_default((state) => state.setDiscoutCoupon);
  const tar = (0, import_react2.useRef)(null);
  const target = createcampaign_default((state) => state.target);
  const setTarget = createcampaign_default((state) => state.setTarget);
  const mintar = (0, import_react2.useRef)(null);
  const mintarget = createcampaign_default((state) => state.minTarget);
  const setMintarget = createcampaign_default((state) => state.setMinTarget);
  const [rating, setRating] = (0, import_react2.useState)(0);
  const getrating = createcampaign_default((state) => state.rating);
  const setrating = createcampaign_default((state) => state.setRating);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const [approval, setApproval] = (0, import_react2.useState)(null);
  const getapproval = createcampaign_default((state) => state.approval);
  const setapproval = createcampaign_default((state) => state.setApproval);
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c, _d;
    campinfo.current.value = campaignInfo;
    setApproval(getapproval);
    setRating(getrating);
    if (((_a = affLink.current) == null ? void 0 : _a.value) != null) {
      affLink.current.value = affiliatedLinks;
    }
    if (((_b = discCopon.current) == null ? void 0 : _b.value) != null) {
      discCopon.current.value = discoutCoupon;
    }
    if (((_c = tar.current) == null ? void 0 : _c.value) != null) {
      tar.current.value = target.toString();
    }
    if (((_d = mintar.current) == null ? void 0 : _d.value) != null) {
      mintar.current.value = mintarget.toString();
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-xl rounded-xl px-8 py-4 mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-black tect-xl font-medium text-left", children: campaginType == "1" ? "Sponsored post" : campaginType == "2" ? "Review post" : campaginType == "3" ? "Discount and Affiliated post" : "Contest post" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 133,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:flex gap-2 mt-2 grid place-items-center grid-cols-4", children: data.platform.map((val, i) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` p-2 rounded-lg ${platform.includes(val.id) ? "bg-white shadow-xl " : "bg-gray-200"} `, onClick: () => {
        setPlatform(val.id);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data.platform[i]["platformLogoUrl"], alt: "error", className: "w-10 h-10" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 142,
        columnNumber: 33
      }, this) }, i, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 139,
        columnNumber: 29
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 136,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:flex gap-4 mt-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4", children: mediatype.map((val, i) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `cursor-pointer text-primary text-lg text-center font-normal w-28 py-1  rounded-xl ${val == media ? "bg-white shadow-xl" : "bg-gray-100"}`, onClick: () => {
        setMedia(val);
      }, children: val }, i, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 150,
        columnNumber: 29
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 147,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Mentions" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 159,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: mendtion.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-black font-semibold ", children: `@${value}` }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 166,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeMendtion(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 170,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 169,
              columnNumber: 41
            }, this)
          ] }, i, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 165,
            columnNumber: 37
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 162,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 176,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddMendtion(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 178,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 177,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 161,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearMendtion, children: "clear all" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 182,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 181,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 160,
      columnNumber: 17
    }, this),
    addmendtion ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: mendtionText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Mention" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 189,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 188,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 191,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        if (mendtionText.current.value == "" || mendtionText.current.value == null || mendtionText.current.value == void 0) {
          setMenError("Mention can't be empty!");
        } else if (mendtion.includes(mendtionText.current.value)) {
          setMenError("Mention already exist add a diffrent one");
        } else if (mendtionText.current.value.indexOf(" ") >= 0) {
          setMenError("Mention cannot containt space");
        } else {
          addMendtion(mendtionText.current.value);
          mendtionText.current.value = "";
          setAddMendtion(false);
          setMenError(null);
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 208,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 192,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 187,
      columnNumber: 25
    }, this) : null,
    menerror == "" || menerror == null || menerror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: menerror }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 214,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Hashtag" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 218,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-2 overflow-x-scroll no-scrollbar", children: hashtag.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-black font-semibold ", children: `#${value}` }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 225,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center cursor-pointer", onClick: () => removeHashtag(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 229,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 228,
              columnNumber: 41
            }, this)
          ] }, i, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 224,
            columnNumber: 37
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 221,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 235,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddHashtag(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 237,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 236,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 220,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-primary text-center text-md font-normal my-2 w-20 cursor-pointer", onClick: clearHashtag, children: "clear all" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 241,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 240,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 219,
      columnNumber: 17
    }, this),
    addhashtag ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: hashtagText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Hashtag" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 248,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 247,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 250,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        if (hashtagText.current.value == "" || hashtagText.current.value == null || hashtagText.current.value == void 0) {
          setHashError("Hashtag can't be empty!");
        } else if (hashtag.includes(hashtagText.current.value)) {
          setHashError("Hashtag already exist add a diffrent one");
        } else if (hashtagText.current.value.indexOf(" ") >= 0) {
          setHashError("Hashtag cannot containt space");
        } else {
          addHashtag(hashtagText.current.value);
          hashtagText.current.value = "";
          setAddHashtag(false);
          setHashError(null);
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 266,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 251,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 246,
      columnNumber: 25
    }, this) : null,
    hasherror == "" || hasherror == null || hasherror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: hasherror }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 272,
      columnNumber: 21
    }, this),
    campaginType == "2" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Minimum rating required" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 278,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react_simple_star_rating.Rating,
        {
          initialValue: rating,
          onClick: handleRating
        },
        void 0,
        false,
        {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 280,
          columnNumber: 33
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 279,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 277,
      columnNumber: 25
    }, this) : null,
    campaginType == "3" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Affiliated links (optional)" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 290,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: affLink, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 291,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Discount coupons" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 292,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: discCopon, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 293,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 289,
      columnNumber: 25
    }, this) : null,
    campaginType == "4" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Target" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 302,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: tar, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 303,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 301,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 305,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Min target" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 307,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: mintar, type: "text", className: "bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 308,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 306,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 300,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 299,
      columnNumber: 25
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Campaign info" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 314,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: campinfo, className: "p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 315,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Optional attachments" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 316,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-black font-semibold  text-md", children: pdfFile.length == 0 ? "" : pdfFile[0].name }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 318,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 319,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full", onClick: () => {
        inputFile.current.click();
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faPaperclip }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 321,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 320,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 317,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: inputFile, type: "file", accept: "application/pdf", onChange: (value) => {
      let file_size = parseInt((value.target.files[0].size / 1024 / 1024).toString());
      if (file_size < 4) {
        setPdferror(null);
        addPdfFile(value.target.files[0]);
      } else {
        setPdferror("Pdf file size must be less then 4 mb");
      }
    } }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 325,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 324,
      columnNumber: 17
    }, this),
    pdferror == "" || pdferror == null || pdferror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: pdferror }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 336,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "You should" }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 339,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-green-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCheck }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 345,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 344,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-lg text-left font-medium", children: "Do" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 348,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 347,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 350,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddDos(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 352,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 351,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 343,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: dos.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
            value,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: " " }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 361,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center ml-2 cursor-pointer", onClick: () => removeDos(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 363,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 362,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 359,
            columnNumber: 41
          }, this) }, i, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 358,
            columnNumber: 37
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 355,
          columnNumber: 25
        }, this),
        adddos ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: dosText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Do's" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 374,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 373,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 376,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
            if (dosText.current.value == "" || dosText.current.value == null || dosText.current.value == void 0) {
              setDosError("Dos can't be empty!");
            } else if (dos.includes(dosText.current.value)) {
              setDosError("Dos already exist add a diffrent one");
            } else {
              addDos(dosText.current.value);
              dosText.current.value = "";
              setAddDos(false);
              setDosError(null);
            }
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 390,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 377,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 372,
          columnNumber: 33
        }, this) : null,
        doserror == "" || doserror == null || doserror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: doserror }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 396,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 342,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 400,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#EEEEEE] w-full h-10 rounded-lg flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 rounded-lg font-bold text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faRemove }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 405,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 404,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary text-lg text-left font-medium", children: "Don't" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 408,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 407,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 410,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center px-4 bg-gray-300 rounded-lg", onClick: () => setAddDonts(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faAdd }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 412,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 411,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 403,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: donts.map((value, i) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex", children: [
            value,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow", children: " " }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 422,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center ml-2 cursor-pointer", onClick: () => removeDonts(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faCircleXmark, className: "text-lg font-bold text-red-500" }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 424,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/home/createcampaign/step2.tsx",
              lineNumber: 423,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 420,
            columnNumber: 41
          }, this) }, i, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 419,
            columnNumber: 37
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 416,
          columnNumber: 25
        }, this),
        adddonts ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: dontsText, type: "text", className: "bg-gray-200 w-full outline-none rounded-lg px-4 py-2", placeholder: "Dont's" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 435,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 434,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 437,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
            if (dontsText.current.value == "" || dontsText.current.value == null || dontsText.current.value == void 0) {
              setDontsError("Donts can't be empty!");
            } else if (donts.includes(dontsText.current.value)) {
              setDontsError("Donts already exist add a diffrent one");
            } else {
              addDonts(dontsText.current.value);
              dontsText.current.value = "";
              setAddDonts(false);
              setDontsError(null);
            }
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "ADD", background: "bg-primary", width: "w-20" }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 451,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/home/createcampaign/step2.tsx",
            lineNumber: 438,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 433,
          columnNumber: 33
        }, this) : null,
        dontserror == "" || dontserror == null || dontserror == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md", children: dontserror }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 457,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 402,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 340,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row items-center mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-primary tect-xl font-medium text-left my-1", children: "Does the influencer need to seek an approval of the post before posting" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 463,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grow" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 466,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setApproval(true);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Yes", textColor: approval ? "text-white" : "text-primary", background: approval ? "bg-primary" : "bg-gray-100", width: "w-20" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 469,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 468,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 471,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
          setApproval(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "No", textColor: approval == false ? "text-white" : "text-primary", background: approval == false ? "bg-primary" : "bg-gray-100", width: "w-20" }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 473,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/home/createcampaign/step2.tsx",
          lineNumber: 472,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 467,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 462,
      columnNumber: 17
    }, this),
    error == "" || error == null || error == void 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4", children: error }, void 0, false, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 478,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
        navigator2(-1);
      }, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Back", textColor: "text-black", background: "bg-gray-100", width: "w-full" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 483,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 482,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 485,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", onClick: () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
        if (platform == null || platform.length == 0 || platform == void 0) {
          setError("Select a platform");
        } else if (media == null || media == "" || media == void 0) {
          setError("Select a media");
        } else if (mendtion.length == 0) {
          setError("please add at least one mendtion");
        } else if (hashtag.length == 0) {
          setError("please add at least one hashtag");
        } else if (((_a = campinfo.current) == null ? void 0 : _a.value) == null || ((_b = campinfo.current) == null ? void 0 : _b.value) == void 0 || ((_c = campinfo.current) == null ? void 0 : _c.value) == "") {
          setError("Add campaign info");
        } else if (dos.length == 0) {
          setError("please add at least one dos");
        } else if (donts.length == 0) {
          setError("please add at least one don't");
        } else if (pdfFile.length == 0) {
          setError("please add your attachment");
        } else if (approval == null) {
          setError("Dose influencer need to seek an approval of the post before posting?");
        } else {
          setCampaignInfo((_d = campinfo.current) == null ? void 0 : _d.value);
          setapproval(approval);
          if (campaginType == "2") {
            if (rating == 0) {
              setError("Seleect minimun rating");
            } else {
              setrating(rating);
              navigator2("/home/createcampaign/step3");
            }
          } else if (campaginType == "3") {
            if (((_e = discCopon.current) == null ? void 0 : _e.value) == null || ((_f = discCopon.current) == null ? void 0 : _f.value) == void 0 || ((_g = discCopon.current) == null ? void 0 : _g.value) == "") {
              setError("Add Discount coupons");
            } else {
              setDiscoutCoupon((_h = discCopon.current) == null ? void 0 : _h.value);
              setAffiliatedLinks((_j = (_i = affLink.current) == null ? void 0 : _i.value) != null ? _j : "");
              navigator2("/home/createcampaign/step3");
            }
          } else if (campaginType == "4") {
            if (((_k = tar.current) == null ? void 0 : _k.value) == null || ((_l = tar.current) == null ? void 0 : _l.value) == void 0 || parseInt((_m = tar.current) == null ? void 0 : _m.value) == 0 || ((_n = tar.current) == null ? void 0 : _n.value) == "") {
              setError("Enter target");
            } else if (((_o = mintar.current) == null ? void 0 : _o.value) == null || ((_p = mintar.current) == null ? void 0 : _p.value) == void 0 || parseInt((_q = mintar.current) == null ? void 0 : _q.value) == 0 || ((_r = mintar.current) == null ? void 0 : _r.value) == "") {
              setError("Enter min target");
            } else if (parseInt((_s = mintar.current) == null ? void 0 : _s.value) > parseInt((_t = tar.current) == null ? void 0 : _t.value)) {
              setError("Target must be gretter then min target.");
            } else {
              setMintarget(parseInt((_u = mintar.current) == null ? void 0 : _u.value));
              setTarget(parseInt((_v = tar.current) == null ? void 0 : _v.value));
              navigator2("/home/createcampaign/step3");
            }
          } else {
            navigator2("/home/createcampaign/step3");
          }
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CusButton, { text: "Next", textColor: "text-white", background: "bg-primary", width: "w-full" }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 551,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/home/createcampaign/step2.tsx",
        lineNumber: 486,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/createcampaign/step2.tsx",
      lineNumber: 481,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/createcampaign/step2.tsx",
    lineNumber: 132,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/createcampaign/step2.tsx",
    lineNumber: 131,
    columnNumber: 9
  }, this);
};
var step2_default = Step2;
export {
  step2_default as default
};
//# sourceMappingURL=/build/routes/home/createcampaign/step2-EF4MKM34.js.map
