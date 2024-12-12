import {
  TinyColor,
  generate
} from "./chunk-LXEYKIM3.js";
import {
  Comment,
  Fragment,
  Text,
  cloneVNode,
  computed,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isVNode,
  onBeforeMount,
  onBeforeUnmount,
  provide,
  ref,
  render,
  shallowRef,
  toRef,
  triggerRef,
  unref,
  watch,
  watchEffect
} from "./chunk-HDQZI5PA.js";

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/vc-util/warning.js
var warned = {};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    console.error(`Warning: ${message}`);
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    console.warn(`Note: ${message}`);
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
var warning_default = warningOnce;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/warning.js
function noop() {
}
var warning2 = noop;
if (true) {
  warning2 = (valid, component, message) => {
    warning_default(valid, `[ant-design-vue: ${component}] ${message}`);
    if (false) {
      resetWarned();
    }
  };
}
var warning_default2 = warning2;

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}

// node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h3 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h3 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h3 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h3 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h3 ^= str.charCodeAt(i2) & 255;
      h3 = /* Math.imul(h, m): */
      (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
  }
  h3 ^= h3 >>> 13;
  h3 = /* Math.imul(h, m): */
  (h3 & 65535) * 1540483477 + ((h3 >>> 16) * 59797 << 16);
  return ((h3 ^ h3 >>> 15) >>> 0).toString(36);
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/Cache.js
var SPLIT = "%";
var Entity = class {
  constructor(instanceId) {
    this.cache = /* @__PURE__ */ new Map();
    this.instanceId = instanceId;
  }
  get(keys) {
    return this.cache.get(Array.isArray(keys) ? keys.join(SPLIT) : keys) || null;
  }
  update(keys, valueFn) {
    const path = Array.isArray(keys) ? keys.join(SPLIT) : keys;
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
};
var Cache_default = Entity;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/type.js
var tuple = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
var tupleNum = function() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args;
};
var withInstall = (comp) => {
  const c2 = comp;
  c2.install = function(app) {
    app.component(c2.displayName || c2.name, comp);
  };
  return comp;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function objectType(defaultVal) {
  return {
    type: Object,
    default: defaultVal
  };
}
function booleanType(defaultVal) {
  return {
    type: Boolean,
    default: defaultVal
  };
}
function functionType(defaultVal) {
  return {
    type: Function,
    default: defaultVal
  };
}
function anyType(defaultVal, required) {
  const type = {
    validator: () => true,
    default: defaultVal
  };
  return required ? type : type;
}
function vNodeType() {
  return {
    validator: () => true
  };
}
function arrayType(defaultVal) {
  return {
    type: Array,
    default: defaultVal
  };
}
function stringType(defaultVal) {
  return {
    type: String,
    default: defaultVal
  };
}
function someType(types, defaultVal) {
  return types ? {
    type: types,
    default: defaultVal
  } : anyType(defaultVal);
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/StyleContext.js
var ATTR_TOKEN = "data-token-hash";
var ATTR_MARK = "data-css-hash";
var ATTR_CACHE_PATH = "data-cache-path";
var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    const styles = document.body.querySelectorAll(`style[${ATTR_MARK}]`) || [];
    const {
      firstChild
    } = document.head;
    Array.from(styles).forEach((style) => {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });
    const styleHash = {};
    Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach((style) => {
      var _a;
      const hash2 = style.getAttribute(ATTR_MARK);
      if (styleHash[hash2]) {
        if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
        }
      } else {
        styleHash[hash2] = true;
      }
    });
  }
  return new Cache_default(cssinjsInstanceId);
}
var StyleContextKey = Symbol("StyleContextKey");
var getCache = () => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  let cache;
  if (instance && instance.appContext) {
    const globalCache = (_c = (_b = (_a = instance.appContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.globalProperties) === null || _c === void 0 ? void 0 : _c.__ANTDV_CSSINJS_CACHE__;
    if (globalCache) {
      cache = globalCache;
    } else {
      cache = createCache();
      if (instance.appContext.config.globalProperties) {
        instance.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = cache;
      }
    }
  } else {
    cache = createCache();
  }
  return cache;
};
var defaultStyleContext = {
  cache: createCache(),
  defaultCache: true,
  hashPriority: "low"
};
var useStyleInject = () => {
  const cache = getCache();
  return inject(StyleContextKey, shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache
  })));
};
var useStyleProvider = (props) => {
  const parentContext = useStyleInject();
  const context = shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  watch([() => unref(props), parentContext], () => {
    const mergedContext = _extends({}, parentContext.value);
    const propsValue = unref(props);
    Object.keys(propsValue).forEach((key) => {
      const value = propsValue[key];
      if (propsValue[key] !== void 0) {
        mergedContext[key] = value;
      }
    });
    const {
      cache
    } = propsValue;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.value.defaultCache;
    context.value = mergedContext;
  }, {
    immediate: true
  });
  provide(StyleContextKey, context);
  return context;
};
var styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
var StyleProvider = withInstall(defineComponent({
  name: "AStyleProvider",
  inheritAttrs: false,
  props: styleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useStyleProvider(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
}));

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useHMR.js
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var useHMR_default = false ? useProdHMR : useDevHMR;
if (typeof module !== "undefined" && module && module.hot && typeof window !== "undefined") {
  const win = window;
  if (typeof win.webpackHotUpdate === "function") {
    const originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function() {
      webpackHMR = true;
      setTimeout(() => {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate(...arguments);
    };
  }
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useGlobalCache.js
function useClientCache(prefix2, keyPath, cacheFn, onCacheRemove) {
  const styleContext = useStyleInject();
  const fullPathStr = shallowRef("");
  const res = shallowRef();
  watchEffect(() => {
    fullPathStr.value = [prefix2, ...keyPath.value].join("%");
  });
  const HMRUpdate = useHMR_default();
  const clearCache = (pathStr) => {
    styleContext.value.cache.update(pathStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
        return null;
      }
      return [times - 1, cache];
    });
  };
  watch(fullPathStr, (newStr, oldStr) => {
    if (oldStr) clearCache(oldStr);
    styleContext.value.cache.update(newStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      let tmpCache = cache;
      if (cache && HMRUpdate) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
        tmpCache = null;
      }
      const mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
    res.value = styleContext.value.cache.get(fullPathStr.value)[1];
  }, {
    immediate: true
  });
  onBeforeUnmount(() => {
    clearCache(fullPathStr.value);
  });
  return res;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var canUseDom_default = canUseDom;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/vc-util/Dom/contains.js
function contains(root, n2) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n2);
  }
  return false;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/vc-util/Dom/dynamicCSS.js
var APPEND_ORDER = "data-vc-order";
var MARK_KEY = `vc-util-key`;
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  let {
    mark
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter((node2) => node2.tagName === "STYLE");
}
function injectCSS(css) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom_default()) {
    return null;
  }
  const {
    csp,
    prepend
  } = option;
  const styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(option);
  const {
    firstChild
  } = container;
  if (prepend) {
    if (prepend === "queue") {
      const existStyle = findStyles(container).filter((node2) => ["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER)));
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const container = getContainer(option);
  return findStyles(container).find((node2) => node2.getAttribute(getMark(option)) === key);
}
function removeCSS(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const existNode = findExistNode(key, option);
  if (existNode) {
    const container = getContainer(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  const cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS("", option);
    const {
      parentNode
    } = placeholderStyle;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _a, _b, _c;
  const container = getContainer(option);
  syncRealContainer(container, option);
  const existNode = findExistNode(key, option);
  if (existNode) {
    if (((_a = option.csp) === null || _a === void 0 ? void 0 : _a.nonce) && existNode.nonce !== ((_b = option.csp) === null || _b === void 0 ? void 0 : _b.nonce)) {
      existNode.nonce = (_c = option.csp) === null || _c === void 0 ? void 0 : _c.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/theme/ThemeCache.js
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i2 = 0; i2 < left.length; i2++) {
    if (left[i2] !== right[i2]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = class _ThemeCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption) {
    let updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let cache = {
      map: this.cache
    };
    derivativeOption.forEach((derivative2) => {
      var _a;
      if (!cache) {
        cache = void 0;
      } else {
        cache = (_a = cache === null || cache === void 0 ? void 0 : cache.map) === null || _a === void 0 ? void 0 : _a.get(derivative2);
      }
    });
    if ((cache === null || cache === void 0 ? void 0 : cache.value) && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache === null || cache === void 0 ? void 0 : cache.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > _ThemeCache.MAX_CACHE_SIZE + _ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key) => {
          const [, callTimes] = result;
          if (this.internalGet(key)[1] < callTimes) {
            return [key, this.internalGet(key)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative2, index) => {
      if (index === derivativeOption.length - 1) {
        cache.set(derivative2, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache.get(derivative2);
        if (!cacheValue) {
          cache.set(derivative2, {
            map: /* @__PURE__ */ new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache = cache.get(derivative2).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache.map
        });
      }
      return (_a = cache.value) === null || _a === void 0 ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
};
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/theme/Theme.js
var uuid = 0;
var Theme = class {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning_default2(derivatives.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function.");
    }
    uuid += 1;
  }
  getDerivativeToken(token2) {
    return this.derivatives.reduce((result, derivative2) => derivative2(token2, result), void 0);
  }
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/theme/createTheme.js
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/util.js
var flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token2) {
  let str = flattenTokenCache.get(token2) || "";
  if (!str) {
    Object.keys(token2).forEach((key) => {
      const value = token2[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token2, str);
  }
  return str;
}
function token2key(token2, salt) {
  return murmur2(`${salt}_${flattenToken(token2)}`);
}
var randomSelectorKey = `random-${Date.now()}-${Math.random()}`.replace(/\./g, "");
var checkContent = "_bAmBoO_";
function supportSelector(styleStr, handleElement, supportCheck) {
  var _a, _b;
  if (canUseDom_default()) {
    updateCSS(styleStr, randomSelectorKey);
    const ele = document.createElement("div");
    ele.style.position = "fixed";
    ele.style.left = "0";
    ele.style.top = "0";
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
    document.body.appendChild(ele);
    if (true) {
      ele.innerHTML = "Test";
      ele.style.zIndex = "9999999";
    }
    const support = supportCheck ? supportCheck(ele) : (_a = getComputedStyle(ele).content) === null || _a === void 0 ? void 0 : _a.includes(checkContent);
    (_b = ele.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
var canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector(`@layer ${randomSelectorKey} { .${randomSelectorKey} { content: "${checkContent}"!important; } }`, (ele) => {
      ele.className = randomSelectorKey;
    });
  }
  return canLayer;
}
var canWhere = void 0;
function supportWhere() {
  if (canWhere === void 0) {
    canWhere = supportSelector(`:where(.${randomSelectorKey}) { content: "${checkContent}"!important; }`, (ele) => {
      ele.className = randomSelectorKey;
    });
  }
  return canWhere;
}
var canLogic = void 0;
function supportLogicProps() {
  if (canLogic === void 0) {
    canLogic = supportSelector(`.${randomSelectorKey} { inset-block: 93px !important; }`, (ele) => {
      ele.className = randomSelectorKey;
    }, (ele) => getComputedStyle(ele).bottom === "93px");
  }
  return canLogic;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useCacheToken.js
var EMPTY_OVERRIDE = {};
var isProduction = false;
var isPrerender = false;
var hashPrefix = !isProduction && !isPrerender ? "css-dev-only-do-not-override" : "css";
var tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    const styles = document.querySelectorAll(`style[${ATTR_TOKEN}="${key}"]`);
    styles.forEach((style) => {
      var _a;
      if (style[CSS_IN_JS_INSTANCE] === instanceId) {
        (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
      }
    });
  }
}
var TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter((key) => {
    const count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken = (originToken, overrideToken, theme, format) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = _extends(_extends({}, derivativeToken), overrideToken);
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
function useCacheToken(theme, tokens) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ref({});
  const style = useStyleInject();
  const mergedToken = computed(() => _extends({}, ...tokens.value));
  const tokenStr = computed(() => flattenToken(mergedToken.value));
  const overrideTokenStr = computed(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
  const cachedToken = useClientCache("token", computed(() => [option.value.salt || "", theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
    const {
      salt = "",
      override = EMPTY_OVERRIDE,
      formatToken: formatToken2,
      getComputedToken: compute
    } = option.value;
    const mergedDerivativeToken = compute ? compute(mergedToken.value, override, theme.value) : getComputedToken(mergedToken.value, override, theme.value, formatToken2);
    const tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId];
  }, (cache) => {
    var _a;
    cleanTokenStyle(cache[0]._tokenKey, (_a = style.value) === null || _a === void 0 ? void 0 : _a.cache.instanceId);
  });
  return cachedToken;
}

// node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/.pnpm/stylis@4.3.4/node_modules/stylis/src/Enum.js
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/.pnpm/stylis@4.3.4/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}

// node_modules/.pnpm/stylis@4.3.4/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/.pnpm/stylis@4.3.4/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}

// node_modules/.pnpm/stylis@4.3.4/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  for (var i2 = 0; i2 < children.length; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/linters/utils.js
function lintWarning(message, info) {
  const {
    path,
    parentSelectors
  } = info;
  warning_default(false, `[Ant Design Vue CSS-in-JS] ${path ? `Error in '${path}': ` : ""}${message}${parentSelectors.length ? ` Selector info: ${parentSelectors.join(" -> ")}` : ""}`);
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/linters/contentQuotesLinter.js
var linter = (key, value, info) => {
  if (key === "content") {
    const contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    const contentValues = ["normal", "none", "initial", "inherit", "unset"];
    if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${value}"'\`.`, info);
    }
  }
};
var contentQuotesLinter_default = linter;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/linters/hashedAnimationLinter.js
var linter2 = (key, value, info) => {
  if (key === "animation") {
    if (info.hashId && value !== "none") {
      lintWarning(`You seem to be using hashed animation '${value}', in which case 'animationName' with Keyframe as value is recommended.`, info);
    }
  }
};
var hashedAnimationLinter_default = linter2;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/linters/legacyNotSelectorLinter.js
function isConcatSelector(selector) {
  var _a;
  const notContent = ((_a = selector.match(/:not\(([^)]*)\)/)) === null || _a === void 0 ? void 0 : _a[1]) || "";
  const splitCells = notContent.split(/(\[[^[]*])|(?=[.#])/).filter((str) => str);
  return splitCells.length > 1;
}
function parsePath(info) {
  return info.parentSelectors.reduce((prev2, cur) => {
    if (!prev2) {
      return cur;
    }
    return cur.includes("&") ? cur.replace(/&/g, prev2) : `${prev2} ${cur}`;
  }, "");
}
var linter3 = (_key, _value, info) => {
  const parentSelectorPath = parsePath(info);
  const notList = parentSelectorPath.match(/:not\([^)]*\)/g) || [];
  if (notList.length > 0 && notList.some(isConcatSelector)) {
    lintWarning(`Concat ':not' selector not support in legacy browsers.`, info);
  }
};
var legacyNotSelectorLinter_default = linter3;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/linters/logicalPropertiesLinter.js
var linter4 = (key, value, info) => {
  switch (key) {
    case "marginLeft":
    case "marginRight":
    case "paddingLeft":
    case "paddingRight":
    case "left":
    case "right":
    case "borderLeft":
    case "borderLeftWidth":
    case "borderLeftStyle":
    case "borderLeftColor":
    case "borderRight":
    case "borderRightWidth":
    case "borderRightStyle":
    case "borderRightColor":
    case "borderTopLeftRadius":
    case "borderTopRightRadius":
    case "borderBottomLeftRadius":
    case "borderBottomRightRadius":
      lintWarning(`You seem to be using non-logical property '${key}' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`, info);
      return;
    case "margin":
    case "padding":
    case "borderWidth":
    case "borderStyle":
      if (typeof value === "string") {
        const valueArr = value.split(" ").map((item) => item.trim());
        if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
          lintWarning(`You seem to be using '${key}' property with different left ${key} and right ${key}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`, info);
        }
      }
      return;
    case "clear":
    case "textAlign":
      if (value === "left" || value === "right") {
        lintWarning(`You seem to be using non-logical value '${value}' of ${key}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`, info);
      }
      return;
    case "borderRadius":
      if (typeof value === "string") {
        const radiusGroups = value.split("/").map((item) => item.trim());
        const invalid = radiusGroups.reduce((result, group) => {
          if (result) {
            return result;
          }
          const radiusArr = group.split(" ").map((item) => item.trim());
          if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
            return true;
          }
          if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
            return true;
          }
          if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
            return true;
          }
          return result;
        }, false);
        if (invalid) {
          lintWarning(`You seem to be using non-logical value '${value}' of ${key}, which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.`, info);
        }
      }
      return;
    default:
  }
};
var logicalPropertiesLinter_default = linter4;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/linters/parentSelectorLinter.js
var linter5 = (_key, _value, info) => {
  if (info.parentSelectors.some((selector) => {
    const selectors = selector.split(",");
    return selectors.some((item) => item.split("&").length > 2);
  })) {
    lintWarning("Should not use more than one `&` in a selector.", info);
  }
};
var parentSelectorLinter_default = linter5;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister/cacheMapUtil.js
var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
var CSS_FILE_STYLE = "_FILE_STYLE__";
function serialize2(cachePathMap2) {
  return Object.keys(cachePathMap2).map((path) => {
    const hash2 = cachePathMap2[path];
    return `${path}:${hash2}`;
  }).join(";");
}
var cachePathMap;
var fromCSSFile = true;
function prepare() {
  var _a;
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom_default()) {
      const div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      let content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach((item) => {
        const [path, hash2] = item.split(":");
        cachePathMap[path] = hash2;
      });
      const inlineMapStyle = document.querySelector(`style[${ATTR_CACHE_MAP}]`);
      if (inlineMapStyle) {
        fromCSSFile = false;
        (_a = inlineMapStyle.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash2 = cachePathMap[path];
  let styleStr = null;
  if (hash2 && canUseDom_default()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      const style = document.querySelector(`style[${ATTR_MARK}="${cachePathMap[path]}"]`);
      if (style) {
        styleStr = style.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash2];
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister/index.js
var isClientSide = canUseDom_default();
var SKIP_CHECK = "_skip_check_";
var MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  const serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
  const keys = key.split(",").map((k2) => {
    var _a;
    const fullPath = k2.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys.join(",");
}
var globalEffectStyleKeys = /* @__PURE__ */ new Set();
var parseStyle = function(interpolation) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let {
    root,
    injectHash,
    parentSelectors
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  };
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list) {
    let fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach((originStyle) => {
    const style = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style === "string") {
      styleStr += `${style}
`;
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce((prev2, trans) => {
        var _a;
        return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev2)) || prev2;
      }, style);
      Object.keys(mergedStyle).forEach((key) => {
        var _a;
        const value = mergedStyle[key];
        if (typeof value === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key.trim();
          let nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = _extends(_extends({}, effectStyle), childEffectStyle);
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          let appendStyle = function(cssKey, cssValue) {
            if (typeof value !== "object" || !(value === null || value === void 0 ? void 0 : value[SKIP_CHECK])) {
              [contentQuotesLinter_default, hashedAnimationLinter_default, ...linters].forEach((linter6) => linter6(cssKey, cssValue, {
                path,
                hashId,
                parentSelectors
              }));
            }
            const styleName = cssKey.replace(/[A-Z]/g, (match2) => `-${match2.toLowerCase()}`);
            let formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
          if (typeof value === "object" && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(",");
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    if (layerCells.length > 1) {
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return murmur2(`${path.join("%")}${styleStr}`);
}
function useStyleRegister(info, styleFn) {
  const styleContext = useStyleInject();
  const tokenKey = computed(() => info.value.token._tokenKey);
  const fullPath = computed(() => [tokenKey.value, ...info.value.path]);
  let isMergedClientSide = isClientSide;
  if (styleContext.value.mock !== void 0) {
    isMergedClientSide = styleContext.value.mock === "client";
  }
  useClientCache(
    "style",
    fullPath,
    // Create cache if needed
    () => {
      const {
        path,
        hashId,
        layer,
        nonce,
        clientOnly,
        order = 0
      } = info.value;
      const cachePath = fullPath.value.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey.value, styleHash, {}, clientOnly, order];
        }
      }
      const styleObj = styleFn();
      const {
        hashPriority,
        container,
        transformers,
        linters,
        cache
      } = styleContext.value;
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle);
      const styleId = uniqueHash(fullPath.value, styleStr);
      if (isMergedClientSide) {
        const mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: order
        };
        const nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        const style = updateCSS(styleStr, styleId, mergedCSSConfig);
        style[CSS_IN_JS_INSTANCE] = cache.instanceId;
        style.setAttribute(ATTR_TOKEN, tokenKey.value);
        if (true) {
          style.setAttribute(ATTR_CACHE_PATH, fullPath.value.join("|"));
        }
        Object.keys(effectStyle).forEach((effectKey) => {
          if (!globalEffectStyleKeys.has(effectKey)) {
            globalEffectStyleKeys.add(effectKey);
            updateCSS(normalizeStyle(effectStyle[effectKey]), `_effect-${effectKey}`, {
              mark: ATTR_MARK,
              prepend: "queue",
              attachTo: container
            });
          }
        });
      }
      return [styleStr, tokenKey.value, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    (_ref, fromHMR) => {
      let [, , styleId] = _ref;
      if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }
  );
  return (node2) => {
    return node2;
  };
}
function extractStyle(cache) {
  let plain = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const matchPrefix = `style%`;
  const styleKeys = Array.from(cache.cache.keys()).filter((key) => key.startsWith(matchPrefix));
  const effectStyles = {};
  const cachePathMap2 = {};
  let styleText = "";
  function toStyleStr(style, tokenKey, styleId) {
    let customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const attrs = _extends(_extends({}, customizeAttrs), {
      [ATTR_TOKEN]: tokenKey,
      [ATTR_MARK]: styleId
    });
    const attrStr = Object.keys(attrs).map((attr) => {
      const val = attrs[attr];
      return val ? `${attr}="${val}"` : null;
    }).filter((v2) => v2).join(" ");
    return plain ? style : `<style ${attrStr}>${style}</style>`;
  }
  const orderStyles = styleKeys.map((key) => {
    const cachePath = key.slice(matchPrefix.length).replace(/%/g, "|");
    const [styleStr, tokenKey, styleId, effectStyle, clientOnly, order] = cache.cache.get(key)[1];
    if (clientOnly) {
      return null;
    }
    const sharedAttrs = {
      "data-vc-order": "prependQueue",
      "data-vc-priority": `${order}`
    };
    let keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs);
    cachePathMap2[cachePath] = styleId;
    if (effectStyle) {
      Object.keys(effectStyle).forEach((effectKey) => {
        if (!effectStyles[effectKey]) {
          effectStyles[effectKey] = true;
          keyStyleText += toStyleStr(normalizeStyle(effectStyle[effectKey]), tokenKey, `_effect-${effectKey}`, sharedAttrs);
        }
      });
    }
    const ret = [order, keyStyleText];
    return ret;
  }).filter((o2) => o2);
  orderStyles.sort((o1, o2) => o1[0] - o2[0]).forEach((_ref2) => {
    let [, style] = _ref2;
    styleText += style;
  });
  styleText += toStyleStr(`.${ATTR_CACHE_MAP}{content:"${serialize2(cachePathMap2)}";}`, void 0, void 0, {
    [ATTR_CACHE_MAP]: ATTR_CACHE_MAP
  });
  return styleText;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/Keyframes.js
var Keyframe = class {
  constructor(name, style) {
    this._keyframe = true;
    this.name = name;
    this.style = style;
  }
  getName() {
    let hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return hashId ? `${hashId}-${this.name}` : this.name;
  }
};
var Keyframes_default = Keyframe;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/transformers/legacyLogicalProperties.js
function splitValues(value) {
  if (typeof value === "number") {
    return [value];
  }
  const splitStyle = String(value).split(/\s+/);
  let temp = "";
  let brackets = 0;
  return splitStyle.reduce((list, item) => {
    if (item.includes("(")) {
      temp += item;
      brackets += item.split("(").length - 1;
    } else if (item.includes(")")) {
      temp += ` ${item}`;
      brackets -= item.split(")").length - 1;
      if (brackets === 0) {
        list.push(temp);
        temp = "";
      }
    } else if (brackets > 0) {
      temp += ` ${item}`;
    } else {
      list.push(item);
    }
    return list;
  }, []);
}
function noSplit(list) {
  list.notSplit = true;
  return list;
}
var keyMap = {
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: noSplit(["borderTop", "borderBottom"]),
  borderBlockStart: noSplit(["borderTop"]),
  borderBlockEnd: noSplit(["borderBottom"]),
  borderInline: noSplit(["borderLeft", "borderRight"]),
  borderInlineStart: noSplit(["borderLeft"]),
  borderInlineEnd: noSplit(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
};
function skipCheck(value) {
  return {
    _skip_check_: true,
    value
  };
}
var transform = {
  visit: (cssObj) => {
    const clone = {};
    Object.keys(cssObj).forEach((key) => {
      const value = cssObj[key];
      const matchValue = keyMap[key];
      if (matchValue && (typeof value === "number" || typeof value === "string")) {
        const values = splitValues(value);
        if (matchValue.length && matchValue.notSplit) {
          matchValue.forEach((matchKey) => {
            clone[matchKey] = skipCheck(value);
          });
        } else if (matchValue.length === 1) {
          clone[matchValue[0]] = skipCheck(value);
        } else if (matchValue.length === 2) {
          matchValue.forEach((matchKey, index) => {
            var _a;
            clone[matchKey] = skipCheck((_a = values[index]) !== null && _a !== void 0 ? _a : values[0]);
          });
        } else if (matchValue.length === 4) {
          matchValue.forEach((matchKey, index) => {
            var _a, _b;
            clone[matchKey] = skipCheck((_b = (_a = values[index]) !== null && _a !== void 0 ? _a : values[index - 2]) !== null && _b !== void 0 ? _b : values[0]);
          });
        } else {
          clone[key] = value;
        }
      } else {
        clone[key] = value;
      }
    });
    return clone;
  }
};
var legacyLogicalProperties_default = transform;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/transformers/px2rem.js
var pxRegex = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
function toFixed(number, precision) {
  const multiplier = Math.pow(10, precision + 1), wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}
var transform2 = function() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    rootValue = 16,
    precision = 5,
    mediaQuery = false
  } = options;
  const pxReplace = (m2, $1) => {
    if (!$1) return m2;
    const pixels = parseFloat($1);
    if (pixels <= 1) return m2;
    const fixedVal = toFixed(pixels / rootValue, precision);
    return `${fixedVal}rem`;
  };
  const visit = (cssObj) => {
    const clone = _extends({}, cssObj);
    Object.entries(cssObj).forEach((_ref) => {
      let [key, value] = _ref;
      if (typeof value === "string" && value.includes("px")) {
        const newValue = value.replace(pxRegex, pxReplace);
        clone[key] = newValue;
      }
      if (!unitlessKeys[key] && typeof value === "number" && value !== 0) {
        clone[key] = `${value}px`.replace(pxRegex, pxReplace);
      }
      const mergedKey = key.trim();
      if (mergedKey.startsWith("@") && mergedKey.includes("px") && mediaQuery) {
        const newKey = key.replace(pxRegex, pxReplace);
        clone[newKey] = clone[key];
        delete clone[key];
      }
    });
    return clone;
  };
  return {
    visit
  };
};
var px2rem_default = transform2;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/cssinjs/index.js
var cssinjs = {
  Theme,
  createTheme,
  useStyleRegister,
  useCacheToken,
  createCache,
  useStyleInject,
  useStyleProvider,
  Keyframes: Keyframes_default,
  extractStyle,
  // Transformer
  legacyLogicalPropertiesTransformer: legacyLogicalProperties_default,
  px2remTransformer: px2rem_default,
  // Linters
  logicalPropertiesLinter: logicalPropertiesLinter_default,
  legacyNotSelectorLinter: legacyNotSelectorLinter_default,
  parentSelectorLinter: parentSelectorLinter_default,
  // cssinjs
  StyleProvider
};
var _experimental = {
  supportModernCSS: () => supportWhere() && supportLogicProps()
};
var cssinjs_default = cssinjs;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/version/version.js
var version_default = "4.2.6";

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/version/index.js
var version_default2 = version_default;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/interface/presetColors.js
var PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/shared/genControlHeight.js
var genControlHeight = (token2) => {
  const {
    controlHeight
  } = token2;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
var genControlHeight_default = genControlHeight;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/shared/genSizeMapToken.js
function genSizeMapToken(token2) {
  const {
    sizeUnit,
    sizeStep
  } = token2;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/seed.js
var defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
var seedToken = _extends(_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
var seed_default = seedToken;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/shared/genColorMapToken.js
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  return _extends(_extends({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/shared/genRadius.js
var genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
var genRadius_default = genRadius;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/shared/genCommonMapToken.js
function genCommonMapToken(token2) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token2;
  return _extends({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius_default(borderRadius));
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/default/colorAlgorithm.js
var getAlphaColor = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
var getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/default/colors.js
var generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
var generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/shared/genFontSizes.js
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_2, index) => {
    const i2 = index - 1;
    const baseSize = base * Math.pow(2.71828, i2 / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/shared/genFontMapToken.js
var genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
var genFontMapToken_default = genFontMapToken;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/themes/default/index.js
function derivative(token2) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate(token2[colorKey]);
    return new Array(10).fill(1).reduce((prev2, _2, i2) => {
      prev2[`${colorKey}-${i2 + 1}`] = colors[i2];
      return prev2;
    }, {});
  }).reduce((prev2, cur) => {
    prev2 = _extends(_extends({}, prev2), cur);
    return prev2;
  }, {});
  return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, token2), colorPalettes), genColorMapToken(token2, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken_default(token2.fontSize)), genSizeMapToken(token2)), genControlHeight_default(token2)), genCommonMapToken(token2));
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/util/getAlphaColor.js
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor2(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r2 = Math.round((fR - bR * (1 - fA)) / fA);
    const g2 = Math.round((fG - bG * (1 - fA)) / fA);
    const b2 = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r2) && isStableColor(g2) && isStableColor(b2)) {
      return new TinyColor({
        r: r2,
        g: g2,
        b: b2,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var getAlphaColor_default = getAlphaColor2;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/util/alias.js
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0) t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
    if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2])) t2[p[i2]] = s2[p[i2]];
  }
  return t2;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest(derivativeToken, ["override"]);
  const overrideTokens = _extends({}, override);
  Object.keys(seed_default).forEach((token2) => {
    delete overrideTokens[token2];
  });
  const mergedToken = _extends(_extends({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 2e3;
  const aliasToken = _extends(_extends(_extends({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor_default(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor_default(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor_default(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor_default(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/style/operationUnit.js
var operationUnit = (token2) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: token2.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${token2.motionDurationSlow}`,
  "&:focus, &:hover": {
    color: token2.colorLinkHover
  },
  "&:active": {
    color: token2.colorLinkActive
  }
});

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/style/roundedArrow.js
var roundedArrow = (width, innerRadius, outerRadius, bgColor, boxShadow) => {
  const unitWidth = width / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = outerRadius * 1 / Math.sqrt(2);
  const by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - innerRadius * (1 / Math.sqrt(2));
  const cy = outerRadius * (Math.sqrt(2) - 1) + innerRadius * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + outerRadius * (Math.sqrt(2) - 2);
  const polygonOffset = outerRadius * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width,
    height: width,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: shadowWidth,
      height: shadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${innerRadius}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width,
      height: width / 2,
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [`polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`, `path('M ${ax} ${ay} A ${outerRadius} ${outerRadius} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${innerRadius} ${innerRadius} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${outerRadius} ${outerRadius} 0 0 0 ${fx} ${fy} Z')`]
      },
      content: '""'
    }
  };
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/style/presetColor.js
function genPresetColor(token2, genCss) {
  return PresetColors.reduce((prev2, colorKey) => {
    const lightColor = token2[`${colorKey}-1`];
    const lightBorderColor = token2[`${colorKey}-3`];
    const darkColor = token2[`${colorKey}-6`];
    const textColor = token2[`${colorKey}-7`];
    return _extends(_extends({}, prev2), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/style/index.js
var textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
var resetComponent = (token2) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token2.colorText,
  fontSize: token2.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token2.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token2.fontFamily
});
var resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
var clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
var genLinkStyle = (token2) => ({
  a: {
    color: token2.colorLink,
    textDecoration: token2.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${token2.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: token2.colorLinkHover
    },
    "&:active": {
      color: token2.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token2.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token2.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token2.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
var genCommonStyle = (token2, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token2;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
var genFocusOutline = (token2) => ({
  outline: `${token2.lineWidthBold}px solid ${token2.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
var genFocusStyle = (token2) => ({
  "&:focus-visible": _extends({}, genFocusOutline(token2))
});

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/config-provider/context.js
var defaultIconPrefixCls = "anticon";
var GlobalFormContextKey = Symbol("GlobalFormContextKey");
var useProvideGlobalForm = (state) => {
  provide(GlobalFormContextKey, state);
};
var useInjectGlobalForm = () => {
  return inject(GlobalFormContextKey, {
    validateMessages: computed(() => void 0)
  });
};
var GlobalConfigContextKey = Symbol("GlobalConfigContextKey");
var configProviderProps = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: objectType(),
  input: objectType(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: objectType(),
  pageHeader: objectType(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: objectType(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: true
  },
  form: objectType(),
  pagination: objectType(),
  theme: objectType(),
  select: objectType(),
  wave: objectType()
});
var configProviderKey = Symbol("configProvider");
var defaultConfigProvider = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : "ant";
  },
  iconPrefixCls: computed(() => defaultIconPrefixCls),
  getPopupContainer: computed(() => () => document.body),
  direction: computed(() => "ltr")
};
var useConfigContextInject = () => {
  return inject(configProviderKey, defaultConfigProvider);
};
var useConfigContextProvider = (props) => {
  return provide(configProviderKey, props);
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/util/genComponentStyleHook.js
function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return (_prefixCls) => {
    const prefixCls = computed(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
    const [theme, token2, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls
    } = useConfigContextInject();
    const rootPrefixCls = computed(() => getPrefixCls());
    const sharedInfo = computed(() => {
      return {
        theme: theme.value,
        token: token2.value,
        hashId: hashId.value,
        path: ["Shared", rootPrefixCls.value]
      };
    });
    useStyleRegister(sharedInfo, () => [{
      // Link
      "&": genLinkStyle(token2.value)
    }]);
    const componentInfo = computed(() => {
      return {
        theme: theme.value,
        token: token2.value,
        hashId: hashId.value,
        path: [component, prefixCls.value, iconPrefixCls.value]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token2.value);
      const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = _extends(_extends({}, defaultComponentToken), token2.value[component]);
      const componentCls = `.${prefixCls.value}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls: prefixCls.value,
        iconCls: `.${iconPrefixCls.value}`,
        antCls: `.${rootPrefixCls.value}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId: hashId.value,
        prefixCls: prefixCls.value,
        rootPrefixCls: rootPrefixCls.value,
        iconPrefixCls: iconPrefixCls.value,
        overrideComponentToken: token2.value[component]
      });
      flush(component, mergedComponentToken);
      return [genCommonStyle(token2.value, prefixCls.value), styleInterpolation];
    }), hashId];
  };
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/util/statistic.js
var enableStatistic = true;
var recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return _extends({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
var statistic = {};
function noop2() {
}
function statisticToken(token2) {
  let tokenKeys2;
  let proxy = token2;
  let flush = noop2;
  if (enableStatistic) {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token2, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      statistic[componentName] = {
        global: Array.from(tokenKeys2),
        component: componentToken
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/theme/internal.js
var defaultTheme = createTheme(derivative);
var defaultConfig = {
  token: seed_default,
  hashed: true
};
var DesignTokenContextKey = Symbol("DesignTokenContext");
var globalDesignTokenApi = shallowRef();
var useDesignTokenProvider = (value) => {
  provide(DesignTokenContextKey, value);
  watch(value, () => {
    globalDesignTokenApi.value = unref(value);
    triggerRef(globalDesignTokenApi);
  }, {
    immediate: true,
    deep: true
  });
};
var DesignTokenProvider = defineComponent({
  props: {
    value: objectType()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider(computed(() => props.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function useToken() {
  const designTokenContext = inject(DesignTokenContextKey, computed(() => globalDesignTokenApi.value || defaultConfig));
  const salt = computed(() => `${version_default2}-${designTokenContext.value.hashed || ""}`);
  const mergedTheme = computed(() => designTokenContext.value.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, computed(() => [seed_default, designTokenContext.value.token]), computed(() => ({
    salt: salt.value,
    override: _extends({
      override: designTokenContext.value.token
    }, designTokenContext.value.components),
    formatToken
  })));
  return [mergedTheme, computed(() => cacheToken.value[0]), computed(() => designTokenContext.value.hashed ? cacheToken.value[1] : "")];
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/responsiveObserve.js
var responsiveArray = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
var getResponsiveMap = (token2) => ({
  xs: `(max-width: ${token2.screenXSMax}px)`,
  sm: `(min-width: ${token2.screenSM}px)`,
  md: `(min-width: ${token2.screenMD}px)`,
  lg: `(min-width: ${token2.screenLG}px)`,
  xl: `(min-width: ${token2.screenXL}px)`,
  xxl: `(min-width: ${token2.screenXXL}px)`,
  xxxl: `{min-width: ${token2.screenXXXL}px}`
});
function useResponsiveObserver() {
  const [, token2] = useToken();
  return computed(() => {
    const responsiveMap = getResponsiveMap(token2.value);
    const subscribers = /* @__PURE__ */ new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach((func) => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = (_ref) => {
            let {
              matches
            } = _ref;
            this.dispatch(_extends(_extends({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  });
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/descriptions/Cell.js
function notEmpty(val) {
  return val !== void 0 && val !== null;
}
var Cell = (props) => {
  const {
    itemPrefixCls,
    component,
    span,
    labelStyle,
    contentStyle,
    bordered,
    label,
    content,
    colon
  } = props;
  const Component = component;
  if (bordered) {
    return createVNode(Component, {
      "class": [{
        [`${itemPrefixCls}-item-label`]: notEmpty(label),
        [`${itemPrefixCls}-item-content`]: notEmpty(content)
      }],
      "colSpan": span
    }, {
      default: () => [notEmpty(label) && createVNode("span", {
        "style": labelStyle
      }, [label]), notEmpty(content) && createVNode("span", {
        "style": contentStyle
      }, [content])]
    });
  }
  return createVNode(Component, {
    "class": [`${itemPrefixCls}-item`],
    "colSpan": span
  }, {
    default: () => [createVNode("div", {
      "class": `${itemPrefixCls}-item-container`
    }, [(label || label === 0) && createVNode("span", {
      "class": [`${itemPrefixCls}-item-label`, {
        [`${itemPrefixCls}-item-no-colon`]: !colon
      }],
      "style": labelStyle
    }, [label]), (content || content === 0) && createVNode("span", {
      "class": `${itemPrefixCls}-item-content`,
      "style": contentStyle
    }, [content])])]
  });
};
var Cell_default = Cell;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/util.js
var isFunction = (val) => typeof val === "function";
var controlDefaultValue = Symbol("controlDefaultValue");
var isArray = Array.isArray;
var isString = (val) => typeof val === "string";
var isObject = (val) => val !== null && typeof val === "object";
var onRE = /^on[^a-z]/;
var isOn = (key) => onRE.test(key);
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
var capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
function resolvePropValue(options, props, key, value) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    if (opt.type === Boolean) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (value === "") {
        value = true;
      }
    }
  }
  return value;
}
function getDataAndAriaProps(props) {
  return Object.keys(props).reduce((memo, key) => {
    if (key.startsWith("data-") || key.startsWith("aria-")) {
      memo[key] = props[key];
    }
    return memo;
  }, {});
}
function toPx(val) {
  if (typeof val === "number") return `${val}px`;
  return val;
}
function renderHelper(v2) {
  let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let defaultV = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof v2 === "function") {
    return v2(props);
  }
  return v2 !== null && v2 !== void 0 ? v2 : defaultV;
}
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise((resolve) => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/classNames.js
function classNames() {
  const classes = [];
  for (let i2 = 0; i2 < arguments.length; i2++) {
    const value = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
    if (!value) continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (let i3 = 0; i3 < value.length; i3++) {
        const inner = classNames(value[i3]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
var classNames_default = classNames;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/isValid.js
var isValid = (value) => {
  return value !== void 0 && value !== null && value !== "";
};
var isValid_default = isValid;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/props-util/initDefaultProps.js
var initDefaultProps = (types, defaultProps) => {
  const propTypes = _extends({}, types);
  Object.keys(defaultProps).forEach((k2) => {
    const prop = propTypes[k2];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k2];
      } else if (prop.def) {
        prop.def(defaultProps[k2]);
      } else {
        propTypes[k2] = {
          type: prop,
          default: defaultProps[k2]
        };
      }
    } else {
      throw new Error(`not have ${k2} prop`);
    }
  });
  return propTypes;
};
var initDefaultProps_default = initDefaultProps;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/props-util/index.js
var splitAttrs = (attrs) => {
  const allAttrs = Object.keys(attrs);
  const eventAttrs = {};
  const onEvents = {};
  const extraAttrs = {};
  for (let i2 = 0, l2 = allAttrs.length; i2 < l2; i2++) {
    const key = allAttrs[i2];
    if (isOn(key)) {
      eventAttrs[key[2].toLowerCase() + key.slice(3)] = attrs[key];
      onEvents[key] = attrs[key];
    } else {
      extraAttrs[key] = attrs[key];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
var parseStyleText = function() {
  let cssText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let camel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  if (typeof cssText === "object") return cssText;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k2 = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k2] = tmp[1].trim();
      }
    }
  });
  return res;
};
var hasProp = (instance, prop) => {
  return instance[prop] !== void 0;
};
var skipFlattenKey = Symbol("skipFlatten");
var flattenChildren = function() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  let filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty2));
    } else if (child && child.type === Fragment) {
      if (child.key === skipFlattenKey) {
        res.push(child);
      } else {
        res.push(...flattenChildren(child.children, filterEmpty2));
      }
    } else if (child && isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid_default(child)) {
      res.push(child);
    }
  });
  return res;
};
var getSlot = function(self) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (isVNode(self)) {
    if (self.type === Fragment) {
      return name === "default" ? flattenChildren(self.children) : [];
    } else if (self.children && self.children[name]) {
      return flattenChildren(self.children[name](options));
    } else {
      return [];
    }
  } else {
    const res = self.$slots[name] && self.$slots[name](options);
    return flattenChildren(res);
  }
};
var findDOMNode = (instance) => {
  var _a;
  let node2 = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node2 && !node2.tagName) {
    node2 = node2.nextSibling;
  }
  return node2;
};
var getOptionProps = (instance) => {
  const res = {};
  if (instance.$ && instance.$.vnode) {
    const props = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach((k2) => {
      const v2 = instance.$props[k2];
      const hyphenateKey = hyphenate(k2);
      if (v2 !== void 0 || hyphenateKey in props) {
        res[k2] = v2;
      }
    });
  } else if (isVNode(instance) && typeof instance.type === "object") {
    const originProps = instance.props || {};
    const props = {};
    Object.keys(originProps).forEach((key) => {
      props[camelize(key)] = originProps[key];
    });
    const options = instance.type.props || {};
    Object.keys(options).forEach((k2) => {
      const v2 = resolvePropValue(options, props, k2, props[k2]);
      if (v2 !== void 0 || k2 in props) {
        res[k2] = v2;
      }
    });
  }
  return res;
};
var getComponent = function(instance) {
  let prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
  let execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  let com = void 0;
  if (instance.$) {
    const temp = instance[prop];
    if (temp !== void 0) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode(instance)) {
    const temp = instance.props && instance.props[prop];
    if (temp !== void 0 && instance.props !== null) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else if (instance.type === Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? void 0 : com;
  }
  return com;
};
function getEvents() {
  let ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  let props = {};
  if (ele.$) {
    props = _extends(_extends({}, props), ele.$attrs);
  } else {
    props = _extends(_extends({}, props), ele.props);
  }
  return splitAttrs(props)[on ? "onEvents" : "events"];
}
function getClass(ele) {
  const props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  const tempCls = props.class || {};
  let cls = {};
  if (typeof tempCls === "string") {
    tempCls.split(" ").forEach((c2) => {
      cls[c2.trim()] = true;
    });
  } else if (Array.isArray(tempCls)) {
    classNames_default(tempCls).split(" ").forEach((c2) => {
      cls[c2.trim()] = true;
    });
  } else {
    cls = _extends(_extends({}, cls), tempCls);
  }
  return cls;
}
function getStyle(ele, camel) {
  const props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  let style = props.style || {};
  if (typeof style === "string") {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    const res = {};
    Object.keys(style).forEach((k2) => res[camelize(k2)] = style[k2]);
    return res;
  }
  return style;
}
function isFragment(c2) {
  return c2.length === 1 && c2[0].type === Fragment;
}
function isEmptyContent(c2) {
  return c2 === void 0 || c2 === null || c2 === "" || Array.isArray(c2) && c2.length === 0;
}
function isEmptyElement(c2) {
  return c2 && (c2.type === Comment || c2.type === Fragment && c2.children.length === 0 || c2.type === Text && c2.children.trim() === "");
}
function isStringElement(c2) {
  return c2 && c2.type === Text;
}
function filterEmpty() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const res = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if ((child === null || child === void 0 ? void 0 : child.type) === Fragment) {
      res.push(...filterEmpty(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter((c2) => !isEmptyElement(c2));
}
function filterEmptyWithUndefined(children) {
  if (children) {
    const coms = filterEmpty(children);
    return coms.length ? coms : void 0;
  } else {
    return children;
  }
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && typeof element.type !== "symbol";
}
function getPropsSlot(slots, props) {
  let prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var _a, _b;
  return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/descriptions/Row.js
var Row = (props) => {
  const renderCells = (items, _ref, _ref2) => {
    let {
      colon,
      prefixCls: prefixCls2,
      bordered: bordered2
    } = _ref;
    let {
      component,
      type,
      showLabel,
      showContent,
      labelStyle: rootLabelStyle,
      contentStyle: rootContentStyle
    } = _ref2;
    return items.map((item, index2) => {
      var _a, _b;
      const itemProps = item.props || {};
      const {
        prefixCls: itemPrefixCls = prefixCls2,
        span = 1,
        labelStyle: labelStyle2 = itemProps["label-style"],
        contentStyle: contentStyle2 = itemProps["content-style"],
        label = (_b = (_a = item.children) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.call(_a)
      } = itemProps;
      const children = getSlot(item);
      const className = getClass(item);
      const style = getStyle(item);
      const {
        key
      } = item;
      if (typeof component === "string") {
        return createVNode(Cell_default, {
          "key": `${type}-${String(key) || index2}`,
          "class": className,
          "style": style,
          "labelStyle": _extends(_extends({}, rootLabelStyle), labelStyle2),
          "contentStyle": _extends(_extends({}, rootContentStyle), contentStyle2),
          "span": span,
          "colon": colon,
          "component": component,
          "itemPrefixCls": itemPrefixCls,
          "bordered": bordered2,
          "label": showLabel ? label : null,
          "content": showContent ? children : null
        }, null);
      }
      return [createVNode(Cell_default, {
        "key": `label-${String(key) || index2}`,
        "class": className,
        "style": _extends(_extends(_extends({}, rootLabelStyle), style), labelStyle2),
        "span": 1,
        "colon": colon,
        "component": component[0],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered2,
        "label": label
      }, null), createVNode(Cell_default, {
        "key": `content-${String(key) || index2}`,
        "class": className,
        "style": _extends(_extends(_extends({}, rootContentStyle), style), contentStyle2),
        "span": span * 2 - 1,
        "component": component[1],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered2,
        "content": children
      }, null)];
    });
  };
  const {
    prefixCls,
    vertical,
    row,
    index,
    bordered
  } = props;
  const {
    labelStyle,
    contentStyle
  } = inject(descriptionsContext, {
    labelStyle: ref({}),
    contentStyle: ref({})
  });
  if (vertical) {
    return createVNode(Fragment, null, [createVNode("tr", {
      "key": `label-${index}`,
      "class": `${prefixCls}-row`
    }, [renderCells(row, props, {
      component: "th",
      type: "label",
      showLabel: true,
      labelStyle: labelStyle.value,
      contentStyle: contentStyle.value
    })]), createVNode("tr", {
      "key": `content-${index}`,
      "class": `${prefixCls}-row`
    }, [renderCells(row, props, {
      component: "td",
      type: "content",
      showContent: true,
      labelStyle: labelStyle.value,
      contentStyle: contentStyle.value
    })])]);
  }
  return createVNode("tr", {
    "key": index,
    "class": `${prefixCls}-row`
  }, [renderCells(row, props, {
    component: bordered ? ["th", "td"] : "td",
    type: "item",
    showLabel: true,
    showContent: true,
    labelStyle: labelStyle.value,
    contentStyle: contentStyle.value
  })]);
};
var Row_default = Row;

// node_modules/.pnpm/vue-types@3.0.2_vue@3.5.13_typescript@5.7.2_/node_modules/vue-types/dist/vue-types.m.js
function e(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function t(t2, n2, r2) {
  return n2 && e(t2.prototype, n2), r2 && e(t2, r2), t2;
}
function n() {
  return (n = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function r(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
}
function i(e2, t2) {
  if (null == e2) return {};
  var n2, r2, i2 = {}, o2 = Object.keys(e2);
  for (r2 = 0; r2 < o2.length; r2++) t2.indexOf(n2 = o2[r2]) >= 0 || (i2[n2] = e2[n2]);
  return i2;
}
function o(e2) {
  return 1 == (null != (t2 = e2) && "object" == typeof t2 && false === Array.isArray(t2)) && "[object Object]" === Object.prototype.toString.call(e2);
  var t2;
}
var u = Object.prototype;
var a = u.toString;
var f = u.hasOwnProperty;
var c = /^\s*function (\w+)/;
function l(e2) {
  var t2, n2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
  if (n2) {
    var r2 = n2.toString().match(c);
    return r2 ? r2[1] : "";
  }
  return "";
}
var s = function(e2) {
  var t2, n2;
  return false !== o(e2) && "function" == typeof (t2 = e2.constructor) && false !== o(n2 = t2.prototype) && false !== n2.hasOwnProperty("isPrototypeOf");
};
var v = function(e2) {
  return e2;
};
var y = v;
if (true) {
  p = "undefined" != typeof console;
  y = p ? function(e2) {
    console.warn("[VueTypes warn]: " + e2);
  } : v;
}
var p;
var d = function(e2, t2) {
  return f.call(e2, t2);
};
var h2 = Number.isInteger || function(e2) {
  return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
};
var b = Array.isArray || function(e2) {
  return "[object Array]" === a.call(e2);
};
var O = function(e2) {
  return "[object Function]" === a.call(e2);
};
var g = function(e2) {
  return s(e2) && d(e2, "_vueTypes_name");
};
var m = function(e2) {
  return s(e2) && (d(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t2) {
    return d(e2, t2);
  }));
};
function j(e2, t2) {
  return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
}
function _(e2, t2, n2) {
  var r2;
  void 0 === n2 && (n2 = false);
  var i2 = true, o2 = "";
  r2 = s(e2) ? e2 : { type: e2 };
  var u2 = g(r2) ? r2._vueTypes_name + " - " : "";
  if (m(r2) && null !== r2.type) {
    if (void 0 === r2.type || true === r2.type) return i2;
    if (!r2.required && void 0 === t2) return i2;
    b(r2.type) ? (i2 = r2.type.some(function(e3) {
      return true === _(e3, t2, true);
    }), o2 = r2.type.map(function(e3) {
      return l(e3);
    }).join(" or ")) : i2 = "Array" === (o2 = l(r2)) ? b(t2) : "Object" === o2 ? s(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function(e3) {
      if (null == e3) return "";
      var t3 = e3.constructor.toString().match(c);
      return t3 ? t3[1] : "";
    }(t2) === o2 : t2 instanceof r2.type;
  }
  if (!i2) {
    var a2 = u2 + 'value "' + t2 + '" should be of type "' + o2 + '"';
    return false === n2 ? (y(a2), false) : a2;
  }
  if (d(r2, "validator") && O(r2.validator)) {
    var f2 = y, v2 = [];
    if (y = function(e3) {
      v2.push(e3);
    }, i2 = r2.validator(t2), y = f2, !i2) {
      var p = (v2.length > 1 ? "* " : "") + v2.join("\n* ");
      return v2.length = 0, false === n2 ? (y(p), i2) : p;
    }
  }
  return i2;
}
function T(e2, t2) {
  var n2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get: function() {
    return this.required = true, this;
  } }, def: { value: function(e3) {
    return void 0 !== e3 || this.default ? O(e3) || true === _(this, e3, true) ? (this.default = b(e3) ? function() {
      return [].concat(e3);
    } : s(e3) ? function() {
      return Object.assign({}, e3);
    } : e3, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e3 + '"'), this) : this;
  } } }), r2 = n2.validator;
  return O(r2) && (n2.validator = j(r2, n2)), n2;
}
function w(e2, t2) {
  var n2 = T(e2, t2);
  return Object.defineProperty(n2, "validate", { value: function(e3) {
    return O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e3, this), this;
  } });
}
function k(e2, t2, n2) {
  var r2, o2, u2 = (r2 = t2, o2 = {}, Object.getOwnPropertyNames(r2).forEach(function(e3) {
    o2[e3] = Object.getOwnPropertyDescriptor(r2, e3);
  }), Object.defineProperties({}, o2));
  if (u2._vueTypes_name = e2, !s(n2)) return u2;
  var a2, f2, c2 = n2.validator, l2 = i(n2, ["validator"]);
  if (O(c2)) {
    var v2 = u2.validator;
    v2 && (v2 = null !== (f2 = (a2 = v2).__original) && void 0 !== f2 ? f2 : a2), u2.validator = j(v2 ? function(e3) {
      return v2.call(this, e3) && c2.call(this, e3);
    } : c2, u2);
  }
  return Object.assign(u2, l2);
}
function P(e2) {
  return e2.replace(/^(?!\s*$)/gm, "  ");
}
var x = function() {
  return w("any", {});
};
var A = function() {
  return w("function", { type: Function });
};
var E = function() {
  return w("boolean", { type: Boolean });
};
var N = function() {
  return w("string", { type: String });
};
var q = function() {
  return w("number", { type: Number });
};
var S = function() {
  return w("array", { type: Array });
};
var V = function() {
  return w("object", { type: Object });
};
var F = function() {
  return T("integer", { type: Number, validator: function(e2) {
    return h2(e2);
  } });
};
var D = function() {
  return T("symbol", { validator: function(e2) {
    return "symbol" == typeof e2;
  } });
};
function L(e2, t2) {
  if (void 0 === t2 && (t2 = "custom validation failed"), "function" != typeof e2) throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(e2.name || "<<anonymous function>>", { validator: function(n2) {
    var r2 = e2(n2);
    return r2 || y(this._vueTypes_name + " - " + t2), r2;
  } });
}
function Y(e2) {
  if (!b(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t2 = 'oneOf - value should be one of "' + e2.join('", "') + '".', n2 = e2.reduce(function(e3, t3) {
    if (null != t3) {
      var n3 = t3.constructor;
      -1 === e3.indexOf(n3) && e3.push(n3);
    }
    return e3;
  }, []);
  return T("oneOf", { type: n2.length > 0 ? n2 : void 0, validator: function(n3) {
    var r2 = -1 !== e2.indexOf(n3);
    return r2 || y(t2), r2;
  } });
}
function B(e2) {
  if (!b(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t2 = false, n2 = [], r2 = 0; r2 < e2.length; r2 += 1) {
    var i2 = e2[r2];
    if (m(i2)) {
      if (g(i2) && "oneOf" === i2._vueTypes_name) {
        n2 = n2.concat(i2.type);
        continue;
      }
      if (O(i2.validator) && (t2 = true), true !== i2.type && i2.type) {
        n2 = n2.concat(i2.type);
        continue;
      }
    }
    n2.push(i2);
  }
  return n2 = n2.filter(function(e3, t3) {
    return n2.indexOf(e3) === t3;
  }), T("oneOfType", t2 ? { type: n2, validator: function(t3) {
    var n3 = [], r3 = e2.some(function(e3) {
      var r4 = _(g(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3, true);
      return "string" == typeof r4 && n3.push(r4), true === r4;
    });
    return r3 || y("oneOfType - provided value does not match any of the " + n3.length + " passed-in validators:\n" + P(n3.join("\n"))), r3;
  } } : { type: n2 });
}
function I(e2) {
  return T("arrayOf", { type: Array, validator: function(t2) {
    var n2, r2 = t2.every(function(t3) {
      return true === (n2 = _(e2, t3, true));
    });
    return r2 || y("arrayOf - value validation error:\n" + P(n2)), r2;
  } });
}
function J(e2) {
  return T("instanceOf", { type: e2 });
}
function M(e2) {
  return T("objectOf", { type: Object, validator: function(t2) {
    var n2, r2 = Object.keys(t2).every(function(r3) {
      return true === (n2 = _(e2, t2[r3], true));
    });
    return r2 || y("objectOf - value validation error:\n" + P(n2)), r2;
  } });
}
function R(e2) {
  var t2 = Object.keys(e2), n2 = t2.filter(function(t3) {
    var n3;
    return !!(null === (n3 = e2[t3]) || void 0 === n3 ? void 0 : n3.required);
  }), r2 = T("shape", { type: Object, validator: function(r3) {
    var i2 = this;
    if (!s(r3)) return false;
    var o2 = Object.keys(r3);
    if (n2.length > 0 && n2.some(function(e3) {
      return -1 === o2.indexOf(e3);
    })) {
      var u2 = n2.filter(function(e3) {
        return -1 === o2.indexOf(e3);
      });
      return y(1 === u2.length ? 'shape - required property "' + u2[0] + '" is not defined.' : 'shape - required properties "' + u2.join('", "') + '" are not defined.'), false;
    }
    return o2.every(function(n3) {
      if (-1 === t2.indexOf(n3)) return true === i2._vueTypes_isLoose || (y('shape - shape definition does not include a "' + n3 + '" property. Allowed keys: "' + t2.join('", "') + '".'), false);
      var o3 = _(e2[n3], r3[n3], true);
      return "string" == typeof o3 && y('shape - "' + n3 + '" property validation error:\n ' + P(o3)), true === o3;
    });
  } });
  return Object.defineProperty(r2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(r2, "loose", { get: function() {
    return this._vueTypes_isLoose = true, this;
  } }), r2;
}
var $ = function() {
  function e2() {
  }
  return e2.extend = function(e3) {
    var t2 = this;
    if (b(e3)) return e3.forEach(function(e4) {
      return t2.extend(e4);
    }), this;
    var n2 = e3.name, r2 = e3.validate, o2 = void 0 !== r2 && r2, u2 = e3.getter, a2 = void 0 !== u2 && u2, f2 = i(e3, ["name", "validate", "getter"]);
    if (d(this, n2)) throw new TypeError('[VueTypes error]: Type "' + n2 + '" already defined');
    var c2, l2 = f2.type;
    return g(l2) ? (delete f2.type, Object.defineProperty(this, n2, a2 ? { get: function() {
      return k(n2, l2, f2);
    } } : { value: function() {
      var e4, t3 = k(n2, l2, f2);
      return t3.validator && (t3.validator = (e4 = t3.validator).bind.apply(e4, [t3].concat([].slice.call(arguments)))), t3;
    } })) : (c2 = a2 ? { get: function() {
      var e4 = Object.assign({}, f2);
      return o2 ? w(n2, e4) : T(n2, e4);
    }, enumerable: true } : { value: function() {
      var e4, t3, r3 = Object.assign({}, f2);
      return e4 = o2 ? w(n2, r3) : T(n2, r3), r3.validator && (e4.validator = (t3 = r3.validator).bind.apply(t3, [e4].concat([].slice.call(arguments)))), e4;
    }, enumerable: true }, Object.defineProperty(this, n2, c2));
  }, t(e2, null, [{ key: "any", get: function() {
    return x();
  } }, { key: "func", get: function() {
    return A().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return E().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return N().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return q().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return S().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return V().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return F().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return D();
  } }]), e2;
}();
function z(e2) {
  var i2;
  return void 0 === e2 && (e2 = { func: function() {
  }, bool: true, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (i2 = function(i3) {
    function o2() {
      return i3.apply(this, arguments) || this;
    }
    return r(o2, i3), t(o2, null, [{ key: "sensibleDefaults", get: function() {
      return n({}, this.defaults);
    }, set: function(t2) {
      this.defaults = false !== t2 ? n({}, true !== t2 ? t2 : e2) : {};
    } }]), o2;
  }($)).defaults = n({}, e2), i2;
}
$.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = B, $.arrayOf = I, $.objectOf = M, $.shape = R, $.utils = { validate: function(e2, t2) {
  return true === _(t2, e2, true);
}, toType: function(e2, t2, n2) {
  return void 0 === n2 && (n2 = false), n2 ? w(e2, t2) : T(e2, t2);
} };
var C = function(e2) {
  function t2() {
    return e2.apply(this, arguments) || this;
  }
  return r(t2, e2), t2;
}(z());

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/vue-types/index.js
var PropTypes = z({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
function withUndefined(type) {
  type.default = void 0;
  return type;
}
var vue_types_default = PropTypes;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/_util/vnode.js
function cloneElement(vnode) {
  let nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  let mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  let ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  const node2 = cloneVNode(ele, nodeProps, mergeRef);
  node2.props = override ? _extends(_extends({}, node2.props), nodeProps) : node2.props;
  warning_default2(typeof node2.props.class !== "object", "class must be string");
  return node2;
}
function cloneVNodes(vnodes) {
  let nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  return vnodes.map((vnode) => cloneElement(vnode, nodeProps, override));
}
function deepCloneElement(vnode) {
  let nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  let mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (Array.isArray(vnode)) {
    return vnode.map((item) => deepCloneElement(item, nodeProps, override, mergeRef));
  } else {
    if (!isVNode(vnode)) {
      return vnode;
    }
    const cloned = cloneElement(vnode, nodeProps, override, mergeRef);
    if (Array.isArray(cloned.children)) {
      cloned.children = deepCloneElement(cloned.children);
    }
    return cloned;
  }
}
function triggerVNodeUpdate(vm, attrs, dom) {
  render(cloneVNode(vm, _extends({}, attrs)), dom);
}
var ensureValidVNode = (slot) => {
  return (slot || []).some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? slot : null;
};
function customRenderSlot(slots, name, props, fallback) {
  var _a;
  const slot = (_a = slots[name]) === null || _a === void 0 ? void 0 : _a.call(slots, props);
  if (ensureValidVNode(slot)) {
    return slot;
  }
  return fallback === null || fallback === void 0 ? void 0 : fallback();
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/config-provider/DisabledContext.js
var DisabledContextKey = Symbol("DisabledContextKey");
var useInjectDisabled = () => {
  return inject(DisabledContextKey, ref(void 0));
};
var useProviderDisabled = (disabled) => {
  const parentDisabled = useInjectDisabled();
  provide(DisabledContextKey, computed(() => {
    var _a;
    return (_a = disabled.value) !== null && _a !== void 0 ? _a : parentDisabled.value;
  }));
  return disabled;
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/vc-pagination/locale/en_US.js
var en_US_default = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/vc-picker/locale/en_US.js
var locale = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
var en_US_default2 = locale;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/time-picker/locale/en_US.js
var locale2 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
var en_US_default3 = locale2;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/date-picker/locale/en_US.js
var locale3 = {
  lang: _extends({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, en_US_default2),
  timePickerLocale: _extends({}, en_US_default3)
};
var en_US_default4 = locale3;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/calendar/locale/en_US.js
var en_US_default5 = en_US_default4;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/locale/en_US.js
var typeTemplate = "${label} is not a valid ${type}";
var localeValues = {
  locale: "en",
  Pagination: en_US_default,
  DatePicker: en_US_default4,
  TimePicker: en_US_default3,
  Calendar: en_US_default5,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
};
var en_US_default6 = localeValues;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/locale/LocaleReceiver.js
var LocaleReceiver_default = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeData = inject("localeData", {});
    const locale4 = computed(() => {
      const {
        componentName = "global",
        defaultLocale
      } = props;
      const locale5 = defaultLocale || en_US_default6[componentName || "global"];
      const {
        antLocale
      } = localeData;
      const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale5 === "function" ? locale5() : locale5), localeFromContext || {});
    });
    const localeCode = computed(() => {
      const {
        antLocale
      } = localeData;
      const localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return en_US_default6.locale;
      }
      return localeCode2;
    });
    return () => {
      const children = props.children || slots.default;
      const {
        antLocale
      } = localeData;
      return children === null || children === void 0 ? void 0 : children(locale4.value, localeCode.value, antLocale);
    };
  }
});
function useLocaleReceiver(componentName, defaultLocale, propsLocale) {
  const localeData = inject("localeData", {});
  const componentLocale = computed(() => {
    const {
      antLocale
    } = localeData;
    const locale4 = unref(defaultLocale) || en_US_default6[componentName || "global"];
    const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends(_extends({}, typeof locale4 === "function" ? locale4() : locale4), localeFromContext || {}), unref(propsLocale) || {});
  });
  return [componentLocale];
}

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/locale-provider/LocaleReceiver.js
var LocaleReceiver_default2 = LocaleReceiver_default;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/empty/empty.js
var Empty = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token2] = useToken();
    const themeStyle = computed(() => {
      const bgColor = new TinyColor(token2.value.colorBgBase);
      if (bgColor.toHsl().l < 0.5) {
        return {
          opacity: 0.65
        };
      }
      return {};
    });
    return () => createVNode("svg", {
      "style": themeStyle.value,
      "width": "184",
      "height": "152",
      "viewBox": "0 0 184 152",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      "transform": "translate(24 31.67)"
    }, [createVNode("ellipse", {
      "fill-opacity": ".8",
      "fill": "#F5F5F7",
      "cx": "67.797",
      "cy": "106.89",
      "rx": "67.797",
      "ry": "12.668"
    }, null), createVNode("path", {
      "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      "fill": "#AEB8C2"
    }, null), createVNode("path", {
      "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      "fill": "url(#linearGradient-1)",
      "transform": "translate(13.56)"
    }, null), createVNode("path", {
      "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      "fill": "#F5F5F7"
    }, null), createVNode("path", {
      "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      "fill": "#DCE0E6"
    }, null)]), createVNode("path", {
      "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      "fill": "#DCE0E6"
    }, null), createVNode("g", {
      "transform": "translate(149.65 15.383)",
      "fill": "#FFF"
    }, [createVNode("ellipse", {
      "cx": "20.654",
      "cy": "3.167",
      "rx": "2.849",
      "ry": "2.815"
    }, null), createVNode("path", {
      "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = true;
var empty_default = Empty;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/empty/simple.js
var Simple = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token2] = useToken();
    const color = computed(() => {
      const {
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
      } = token2.value;
      return {
        borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
        shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
        contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
      };
    });
    return () => createVNode("svg", {
      "width": "64",
      "height": "41",
      "viewBox": "0 0 64 41",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "transform": "translate(0 1)",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("ellipse", {
      "fill": color.value.shadowColor,
      "cx": "32",
      "cy": "33",
      "rx": "32",
      "ry": "7"
    }, null), createVNode("g", {
      "fill-rule": "nonzero",
      "stroke": color.value.borderColor
    }, [createVNode("path", {
      "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), createVNode("path", {
      "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      "fill": color.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = true;
var simple_default = Simple;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/empty/style/index.js
var genSharedEmptyStyle = (token2) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token2;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token2.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token2.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token2.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token2.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightSM
        }
      }
    }
  };
};
var style_default = genComponentStyleHook("Empty", (token2) => {
  const {
    componentCls,
    controlHeightLG
  } = token2;
  const emptyToken = merge(token2, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/empty/index.js
var __rest2 = function(s2, e2) {
  var t2 = {};
  for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0) t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
    if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2])) t2[p[i2]] = s2[p[i2]];
  }
  return t2;
};
var emptyProps = () => ({
  prefixCls: String,
  imageStyle: objectType(),
  image: anyType(),
  description: anyType()
});
var Empty2 = defineComponent({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: emptyProps(),
  setup(props, _ref) {
    let {
      slots = {},
      attrs
    } = _ref;
    const {
      direction,
      prefixCls: prefixClsRef
    } = useConfigInject_default("empty", props);
    const [wrapSSR, hashId] = style_default(prefixClsRef);
    return () => {
      var _a, _b;
      const prefixCls = prefixClsRef.value;
      const _c = _extends(_extends({}, props), attrs), {
        image: mergedImage = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || h(empty_default),
        description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || void 0,
        imageStyle,
        class: className = ""
      } = _c, restProps = __rest2(_c, ["image", "description", "imageStyle", "class"]);
      const image = typeof mergedImage === "function" ? mergedImage() : mergedImage;
      const isNormal = typeof image === "object" && "type" in image && image.type.PRESENTED_IMAGE_SIMPLE;
      return wrapSSR(createVNode(LocaleReceiver_default2, {
        "componentName": "Empty",
        "children": (locale4) => {
          const des = typeof description !== "undefined" ? description : locale4.description;
          const alt = typeof des === "string" ? des : "empty";
          let imageNode = null;
          if (typeof image === "string") {
            imageNode = createVNode("img", {
              "alt": alt,
              "src": image
            }, null);
          } else {
            imageNode = image;
          }
          return createVNode("div", _objectSpread2({
            "class": classNames_default(prefixCls, className, hashId.value, {
              [`${prefixCls}-normal`]: isNormal,
              [`${prefixCls}-rtl`]: direction.value === "rtl"
            })
          }, restProps), [createVNode("div", {
            "class": `${prefixCls}-image`,
            "style": imageStyle
          }, [imageNode]), des && createVNode("p", {
            "class": `${prefixCls}-description`
          }, [des]), slots.default && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [filterEmpty(slots.default())])]);
        }
      }, null));
    };
  }
});
Empty2.PRESENTED_IMAGE_DEFAULT = () => h(empty_default);
Empty2.PRESENTED_IMAGE_SIMPLE = () => h(simple_default);
var empty_default2 = withInstall(Empty2);

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/config-provider/renderEmpty.js
var DefaultRenderEmpty = (props) => {
  const {
    prefixCls
  } = useConfigInject_default("empty", props);
  const renderHtml = (componentName) => {
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(empty_default2, {
          "image": empty_default2.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(empty_default2, {
          "image": empty_default2.PRESENTED_IMAGE_SIMPLE,
          "class": `${prefixCls.value}-small`
        }, null);
      default:
        return createVNode(empty_default2, null, null);
    }
  };
  return renderHtml(props.componentName);
};
function renderEmpty(componentName) {
  return createVNode(DefaultRenderEmpty, {
    "componentName": componentName
  }, null);
}
var renderEmpty_default = renderEmpty;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/config-provider/SizeContext.js
var SizeContextKey = Symbol("SizeContextKey");
var useInjectSize = () => {
  return inject(SizeContextKey, ref(void 0));
};
var useProviderSize = (size) => {
  const parentSize = useInjectSize();
  provide(SizeContextKey, computed(() => size.value || parentSize.value));
  return size;
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/config-provider/hooks/useConfigInject.js
var useConfigInject_default = (name, props) => {
  const sizeContext = useInjectSize();
  const disabledContext = useInjectDisabled();
  const configProvider = inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
    renderEmpty: (name2) => h(DefaultRenderEmpty, {
      componentName: name2
    })
  }));
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  const direction = computed(() => {
    var _a, _b;
    return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
  });
  const iconPrefixCls = computed(() => {
    var _a;
    return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
  });
  const rootPrefixCls = computed(() => configProvider.getPrefixCls());
  const autoInsertSpaceInButton = computed(() => {
    var _a;
    return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
  });
  const renderEmpty2 = configProvider.renderEmpty;
  const space = configProvider.space;
  const pageHeader = configProvider.pageHeader;
  const form = configProvider.form;
  const getTargetContainer = computed(() => {
    var _a, _b;
    return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
  });
  const getPopupContainer = computed(() => {
    var _a, _b, _c;
    return (_b = (_a = props.getContainer) !== null && _a !== void 0 ? _a : props.getPopupContainer) !== null && _b !== void 0 ? _b : (_c = configProvider.getPopupContainer) === null || _c === void 0 ? void 0 : _c.value;
  });
  const dropdownMatchSelectWidth = computed(() => {
    var _a, _b;
    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
  });
  const virtual = computed(() => {
    var _a;
    return (props.virtual === void 0 ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  const size = computed(() => props.size || sizeContext.value);
  const autocomplete = computed(() => {
    var _a, _b, _c;
    return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
  });
  const disabled = computed(() => {
    var _a;
    return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
  });
  const csp = computed(() => {
    var _a;
    return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
  });
  const wave = computed(() => {
    var _a, _b;
    return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = configProvider.wave) === null || _b === void 0 ? void 0 : _b.value;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty: renderEmpty2,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
    iconPrefixCls,
    disabled,
    select: configProvider.select,
    wave
  };
};

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/descriptions/style/index.js
var genBorderedStyle = (token2) => {
  const {
    componentCls,
    descriptionsSmallPadding,
    descriptionsDefaultPadding,
    descriptionsMiddlePadding,
    descriptionsBg
  } = token2;
  return {
    [`&${componentCls}-bordered`]: {
      [`${componentCls}-view`]: {
        border: `${token2.lineWidth}px ${token2.lineType} ${token2.colorSplit}`,
        "> table": {
          tableLayout: "auto",
          borderCollapse: "collapse"
        }
      },
      [`${componentCls}-item-label, ${componentCls}-item-content`]: {
        padding: descriptionsDefaultPadding,
        borderInlineEnd: `${token2.lineWidth}px ${token2.lineType} ${token2.colorSplit}`,
        "&:last-child": {
          borderInlineEnd: "none"
        }
      },
      [`${componentCls}-item-label`]: {
        backgroundColor: descriptionsBg,
        "&::after": {
          display: "none"
        }
      },
      [`${componentCls}-row`]: {
        borderBottom: `${token2.lineWidth}px ${token2.lineType} ${token2.colorSplit}`,
        "&:last-child": {
          borderBottom: "none"
        }
      },
      [`&${componentCls}-middle`]: {
        [`${componentCls}-item-label, ${componentCls}-item-content`]: {
          padding: descriptionsMiddlePadding
        }
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-item-label, ${componentCls}-item-content`]: {
          padding: descriptionsSmallPadding
        }
      }
    }
  };
};
var genDescriptionStyles = (token2) => {
  const {
    componentCls,
    descriptionsExtraColor,
    descriptionItemPaddingBottom,
    descriptionsItemLabelColonMarginRight,
    descriptionsItemLabelColonMarginLeft,
    descriptionsTitleMarginBottom
  } = token2;
  return {
    [componentCls]: _extends(_extends(_extends({}, resetComponent(token2)), genBorderedStyle(token2)), {
      [`&-rtl`]: {
        direction: "rtl"
      },
      [`${componentCls}-header`]: {
        display: "flex",
        alignItems: "center",
        marginBottom: descriptionsTitleMarginBottom
      },
      [`${componentCls}-title`]: _extends(_extends({}, textEllipsis), {
        flex: "auto",
        color: token2.colorText,
        fontWeight: token2.fontWeightStrong,
        fontSize: token2.fontSizeLG,
        lineHeight: token2.lineHeightLG
      }),
      [`${componentCls}-extra`]: {
        marginInlineStart: "auto",
        color: descriptionsExtraColor,
        fontSize: token2.fontSize
      },
      [`${componentCls}-view`]: {
        width: "100%",
        borderRadius: token2.borderRadiusLG,
        table: {
          width: "100%",
          tableLayout: "fixed"
        }
      },
      [`${componentCls}-row`]: {
        "> th, > td": {
          paddingBottom: descriptionItemPaddingBottom
        },
        "&:last-child": {
          borderBottom: "none"
        }
      },
      [`${componentCls}-item-label`]: {
        color: token2.colorText,
        fontWeight: "normal",
        fontSize: token2.fontSize,
        lineHeight: token2.lineHeight,
        textAlign: `start`,
        "&::after": {
          content: '":"',
          position: "relative",
          top: -0.5,
          marginInline: `${descriptionsItemLabelColonMarginLeft}px ${descriptionsItemLabelColonMarginRight}px`
        },
        [`&${componentCls}-item-no-colon::after`]: {
          content: '""'
        }
      },
      [`${componentCls}-item-no-label`]: {
        "&::after": {
          margin: 0,
          content: '""'
        }
      },
      [`${componentCls}-item-content`]: {
        display: "table-cell",
        flex: 1,
        color: token2.colorText,
        fontSize: token2.fontSize,
        lineHeight: token2.lineHeight,
        wordBreak: "break-word",
        overflowWrap: "break-word"
      },
      [`${componentCls}-item`]: {
        paddingBottom: 0,
        verticalAlign: "top",
        "&-container": {
          display: "flex",
          [`${componentCls}-item-label`]: {
            display: "inline-flex",
            alignItems: "baseline"
          },
          [`${componentCls}-item-content`]: {
            display: "inline-flex",
            alignItems: "baseline"
          }
        }
      },
      "&-middle": {
        [`${componentCls}-row`]: {
          "> th, > td": {
            paddingBottom: token2.paddingSM
          }
        }
      },
      "&-small": {
        [`${componentCls}-row`]: {
          "> th, > td": {
            paddingBottom: token2.paddingXS
          }
        }
      }
    })
  };
};
var style_default2 = genComponentStyleHook("Descriptions", (token2) => {
  const descriptionsBg = token2.colorFillAlter;
  const descriptionsTitleMarginBottom = token2.fontSizeSM * token2.lineHeightSM;
  const descriptionsExtraColor = token2.colorText;
  const descriptionsSmallPadding = `${token2.paddingXS}px ${token2.padding}px`;
  const descriptionsDefaultPadding = `${token2.padding}px ${token2.paddingLG}px`;
  const descriptionsMiddlePadding = `${token2.paddingSM}px ${token2.paddingLG}px`;
  const descriptionItemPaddingBottom = token2.padding;
  const descriptionsItemLabelColonMarginRight = token2.marginXS;
  const descriptionsItemLabelColonMarginLeft = token2.marginXXS / 2;
  const descriptionToken = merge(token2, {
    descriptionsBg,
    descriptionsTitleMarginBottom,
    descriptionsExtraColor,
    descriptionItemPaddingBottom,
    descriptionsSmallPadding,
    descriptionsDefaultPadding,
    descriptionsMiddlePadding,
    descriptionsItemLabelColonMarginRight,
    descriptionsItemLabelColonMarginLeft
  });
  return [genDescriptionStyles(descriptionToken)];
});

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.13_typescript@5.7.2_/node_modules/ant-design-vue/es/descriptions/index.js
var DescriptionsItemProps = {
  prefixCls: String,
  label: vue_types_default.any,
  span: Number
};
var descriptionsItemProp = () => ({
  prefixCls: String,
  label: vue_types_default.any,
  labelStyle: {
    type: Object,
    default: void 0
  },
  contentStyle: {
    type: Object,
    default: void 0
  },
  span: {
    type: Number,
    default: 1
  }
});
var DescriptionsItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ADescriptionsItem",
  props: descriptionsItemProp(),
  setup(_2, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var DEFAULT_COLUMN_MAP = {
  xxxl: 3,
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
function getColumn(column2, screens) {
  if (typeof column2 === "number") {
    return column2;
  }
  if (typeof column2 === "object") {
    for (let i2 = 0; i2 < responsiveArray.length; i2++) {
      const breakpoint = responsiveArray[i2];
      if (screens[breakpoint] && column2[breakpoint] !== void 0) {
        return column2[breakpoint] || DEFAULT_COLUMN_MAP[breakpoint];
      }
    }
  }
  return 3;
}
function getFilledItem(node2, rowRestCol, span) {
  let clone = node2;
  if (span === void 0 || span > rowRestCol) {
    clone = cloneElement(node2, {
      span: rowRestCol
    });
    warning_default2(span === void 0, "Descriptions", "Sum of column `span` in a line not match `column` of Descriptions.");
  }
  return clone;
}
function getRows(children, column2) {
  const childNodes = flattenChildren(children);
  const rows = [];
  let tmpRow = [];
  let rowRestCol = column2;
  childNodes.forEach((node2, index) => {
    var _a;
    const span = (_a = node2.props) === null || _a === void 0 ? void 0 : _a.span;
    const mergedSpan = span || 1;
    if (index === childNodes.length - 1) {
      tmpRow.push(getFilledItem(node2, rowRestCol, span));
      rows.push(tmpRow);
      return;
    }
    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(node2);
    } else {
      tmpRow.push(getFilledItem(node2, rowRestCol, mergedSpan));
      rows.push(tmpRow);
      rowRestCol = column2;
      tmpRow = [];
    }
  });
  return rows;
}
var descriptionsProps = () => ({
  prefixCls: String,
  bordered: {
    type: Boolean,
    default: void 0
  },
  size: {
    type: String,
    default: "default"
  },
  title: vue_types_default.any,
  extra: vue_types_default.any,
  column: {
    type: [Number, Object],
    default: () => DEFAULT_COLUMN_MAP
  },
  layout: String,
  colon: {
    type: Boolean,
    default: void 0
  },
  labelStyle: {
    type: Object,
    default: void 0
  },
  contentStyle: {
    type: Object,
    default: void 0
  }
});
var descriptionsContext = Symbol("descriptionsContext");
var Descriptions = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ADescriptions",
  inheritAttrs: false,
  props: descriptionsProps(),
  slots: Object,
  Item: DescriptionsItem,
  setup(props, _ref2) {
    let {
      slots,
      attrs
    } = _ref2;
    const {
      prefixCls,
      direction
    } = useConfigInject_default("descriptions", props);
    let token2;
    const screens = ref({});
    const [wrapSSR, hashId] = style_default2(prefixCls);
    const responsiveObserve = useResponsiveObserver();
    onBeforeMount(() => {
      token2 = responsiveObserve.value.subscribe((screen) => {
        if (typeof props.column !== "object") {
          return;
        }
        screens.value = screen;
      });
    });
    onBeforeUnmount(() => {
      responsiveObserve.value.unsubscribe(token2);
    });
    provide(descriptionsContext, {
      labelStyle: toRef(props, "labelStyle"),
      contentStyle: toRef(props, "contentStyle")
    });
    const mergeColumn = computed(() => getColumn(props.column, screens.value));
    return () => {
      var _a, _b, _c;
      const {
        size,
        bordered = false,
        layout = "horizontal",
        colon = true,
        title = (_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots),
        extra = (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots)
      } = props;
      const children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      const rows = getRows(children, mergeColumn.value);
      return wrapSSR(createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": [prefixCls.value, {
          [`${prefixCls.value}-${size}`]: size !== "default",
          [`${prefixCls.value}-bordered`]: !!bordered,
          [`${prefixCls.value}-rtl`]: direction.value === "rtl"
        }, attrs.class, hashId.value]
      }), [(title || extra) && createVNode("div", {
        "class": `${prefixCls.value}-header`
      }, [title && createVNode("div", {
        "class": `${prefixCls.value}-title`
      }, [title]), extra && createVNode("div", {
        "class": `${prefixCls.value}-extra`
      }, [extra])]), createVNode("div", {
        "class": `${prefixCls.value}-view`
      }, [createVNode("table", null, [createVNode("tbody", null, [rows.map((row, index) => createVNode(Row_default, {
        "key": index,
        "index": index,
        "colon": colon,
        "prefixCls": prefixCls.value,
        "vertical": layout === "vertical",
        "bordered": bordered,
        "row": row
      }, null))])])])]));
    };
  }
});
Descriptions.install = function(app) {
  app.component(Descriptions.name, Descriptions);
  app.component(Descriptions.Item.name, Descriptions.Item);
  return app;
};
var descriptions_default = Descriptions;

export {
  _objectSpread2,
  _extends,
  isFunction,
  camelize,
  capitalize,
  getDataAndAriaProps,
  toPx,
  renderHelper,
  wrapPromiseFn,
  classNames_default,
  isValid_default,
  initDefaultProps_default,
  splitAttrs,
  hasProp,
  skipFlattenKey,
  flattenChildren,
  getSlot,
  findDOMNode,
  getOptionProps,
  getComponent,
  getEvents,
  getStyle,
  isFragment,
  isEmptyContent,
  isEmptyElement,
  isStringElement,
  filterEmpty,
  filterEmptyWithUndefined,
  isValidElement,
  getPropsSlot,
  tuple,
  tupleNum,
  withInstall,
  eventType,
  objectType,
  booleanType,
  functionType,
  anyType,
  vNodeType,
  arrayType,
  stringType,
  someType,
  defaultIconPrefixCls,
  useProvideGlobalForm,
  useInjectGlobalForm,
  configProviderProps,
  useConfigContextInject,
  useConfigContextProvider,
  useInjectDisabled,
  useProviderDisabled,
  en_US_default,
  en_US_default4 as en_US_default2,
  en_US_default5 as en_US_default3,
  en_US_default6 as en_US_default4,
  LocaleReceiver_default,
  useLocaleReceiver,
  LocaleReceiver_default2,
  createCache,
  useStyleInject,
  useStyleProvider,
  StyleProvider,
  canUseDom_default,
  contains,
  removeCSS,
  updateCSS,
  warning,
  note,
  noteOnce,
  warning_default,
  warning_default2,
  Theme,
  createTheme,
  useCacheToken,
  legacyNotSelectorLinter_default,
  logicalPropertiesLinter_default,
  parentSelectorLinter_default,
  useStyleRegister,
  extractStyle,
  Keyframes_default,
  legacyLogicalProperties_default,
  px2rem_default,
  _experimental,
  cssinjs_default,
  version_default2 as version_default,
  PresetColors,
  genControlHeight_default,
  defaultPresetColors,
  seed_default,
  genColorMapToken,
  genFontMapToken_default,
  derivative,
  operationUnit,
  roundedArrow,
  genPresetColor,
  textEllipsis,
  resetComponent,
  resetIcon,
  clearFix,
  genFocusOutline,
  genFocusStyle,
  genComponentStyleHook,
  merge,
  defaultConfig,
  DesignTokenProvider,
  useToken,
  empty_default2 as empty_default,
  DefaultRenderEmpty,
  renderEmpty_default,
  useProviderSize,
  useConfigInject_default,
  withUndefined,
  vue_types_default,
  cloneElement,
  cloneVNodes,
  deepCloneElement,
  triggerVNodeUpdate,
  customRenderSlot,
  responsiveArray,
  useResponsiveObserver,
  DescriptionsItemProps,
  DescriptionsItem,
  descriptionsProps,
  descriptionsContext,
  descriptions_default
};
//# sourceMappingURL=chunk-65XKSGNS.js.map
