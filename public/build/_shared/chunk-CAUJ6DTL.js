import {
  __toESM,
  require_react
} from "/build/_shared/chunk-AZD5HR3D.js";

// node_modules/.pnpm/use-local-storage-state@18.1.2_biqbaboplfbrettd7655fr4n2y/node_modules/use-local-storage-state/es/src/useLocalStorageState.js
var import_react = __toESM(require_react());
var inMemoryData = /* @__PURE__ */ new Map();
function useLocalStorageState(key, options) {
  if (import_react.useSyncExternalStore === void 0) {
    throw new TypeError(`You are using React 17 or below. Install with "npm install use-local-storage-state@17".`);
  }
  const defaultValue = options === null || options === void 0 ? void 0 : options.defaultValue;
  if (typeof window === "undefined") {
    return [
      defaultValue,
      () => {
      },
      {
        isPersistent: true,
        removeItem: () => {
        }
      }
    ];
  }
  const serializer = options === null || options === void 0 ? void 0 : options.serializer;
  return useBrowserLocalStorageState(key, defaultValue, options === null || options === void 0 ? void 0 : options.storageSync, serializer === null || serializer === void 0 ? void 0 : serializer.parse, serializer === null || serializer === void 0 ? void 0 : serializer.stringify);
}
function useBrowserLocalStorageState(key, defaultValue, storageSync = true, parse = parseJSON, stringify = JSON.stringify) {
  const initialDefaultValue = (0, import_react.useRef)(defaultValue).current;
  if (!inMemoryData.has(key) && initialDefaultValue !== void 0 && localStorage.getItem(key) === null) {
    try {
      localStorage.setItem(key, stringify(initialDefaultValue));
    } catch (_a) {
    }
  }
  const storageValue = (0, import_react.useRef)({
    item: null,
    parsed: initialDefaultValue
  });
  const value = (0, import_react.useSyncExternalStore)(
    (0, import_react.useCallback)((onStoreChange) => {
      const onChange = (localKey) => {
        if (key === localKey) {
          onStoreChange();
        }
      };
      callbacks.add(onChange);
      return () => {
        callbacks.delete(onChange);
      };
    }, [key]),
    () => {
      const item = localStorage.getItem(key);
      if (inMemoryData.has(key)) {
        storageValue.current = {
          item,
          parsed: inMemoryData.get(key)
        };
      } else if (item !== storageValue.current.item) {
        let parsed;
        try {
          parsed = item === null ? initialDefaultValue : parse(item);
        } catch (_a) {
          parsed = initialDefaultValue;
        }
        storageValue.current = {
          item,
          parsed
        };
      }
      return storageValue.current.parsed;
    },
    () => initialDefaultValue
  );
  const setState = (0, import_react.useCallback)((newValue) => {
    const value2 = newValue instanceof Function ? newValue(storageValue.current.parsed) : newValue;
    try {
      localStorage.setItem(key, stringify(value2));
      inMemoryData.delete(key);
    } catch (_a) {
      inMemoryData.set(key, value2);
    }
    triggerCallbacks(key);
  }, [key, stringify]);
  (0, import_react.useEffect)(() => {
    if (!storageSync) {
      return void 0;
    }
    const onStorage = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        triggerCallbacks(key);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, storageSync]);
  return (0, import_react.useMemo)(() => [
    value,
    setState,
    {
      isPersistent: value === initialDefaultValue || !inMemoryData.has(key),
      removeItem() {
        inMemoryData.delete(key);
        localStorage.removeItem(key);
        triggerCallbacks(key);
      }
    }
  ], [key, setState, value, initialDefaultValue]);
}
var callbacks = /* @__PURE__ */ new Set();
function triggerCallbacks(key) {
  for (const callback of [...callbacks]) {
    callback(key);
  }
}
function parseJSON(value) {
  return value === "undefined" ? void 0 : JSON.parse(value);
}

// node_modules/.pnpm/use-local-storage-state@18.1.2_biqbaboplfbrettd7655fr4n2y/node_modules/use-local-storage-state/es/index.js
var es_default = useLocalStorageState;

export {
  es_default
};
//# sourceMappingURL=/build/_shared/chunk-CAUJ6DTL.js.map
