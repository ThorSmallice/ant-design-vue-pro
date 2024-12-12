import {
  AbortError,
  TimeoutError,
  after,
  ary,
  at,
  camelCase,
  capitalize,
  chunk,
  clamp,
  clone,
  cloneDeep,
  compact,
  constantCase,
  countBy,
  debounce,
  deburr,
  delay,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  escape,
  escapeRegExp,
  fill,
  findKey,
  flatMap,
  flatMapDeep,
  flatten,
  flattenDeep,
  flattenObject,
  flow,
  flowRight,
  forEachRight,
  groupBy,
  head,
  identity,
  inRange,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  invariant,
  invert,
  isObjectLike,
  isSubset,
  isSubsetWith,
  kebabCase,
  keyBy,
  last,
  lowerCase,
  lowerFirst,
  mapKeys,
  mapValues,
  maxBy,
  mean,
  meanBy,
  median,
  medianBy,
  memoize,
  merge,
  minBy,
  negate,
  omitBy,
  once,
  pad,
  partial,
  partialRight,
  partition,
  pascalCase,
  pickBy,
  pullAt,
  random,
  randomInt,
  range,
  rangeRight,
  rest,
  sample,
  sampleSize,
  shuffle,
  snakeCase,
  sum,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  timeout,
  toFilled,
  toMerged,
  trim,
  trimEnd,
  trimStart,
  unary,
  unescape,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unzip,
  unzipWith,
  upperCase,
  upperFirst,
  withTimeout,
  without,
  words,
  xor,
  xorBy,
  xorWith,
  zip,
  zipObject,
  zipWith
} from "./chunk-I27MP4CI.js";
import {
  isBoolean,
  isError,
  isString,
  isSymbol
} from "./chunk-GC3QMR4O.js";
import {
  isArrayBuffer,
  isBlob,
  isDate,
  isEqual,
  isEqualWith,
  isFile,
  isFunction,
  isJSONArray,
  isJSONObject,
  isJSONValue,
  isLength,
  isMap,
  isNil,
  isNotNil,
  isNull,
  isPlainObject,
  isPrimitive,
  isRegExp,
  isSet,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  noop
} from "./chunk-PWMIMNLE.js";
import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/_internal/compareValues.mjs
function compareValues(a, b, order) {
  if (a < b) {
    return order === "asc" ? -1 : 1;
  }
  if (a > b) {
    return order === "asc" ? 1 : -1;
  }
  return 0;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/array/orderBy.mjs
function orderBy(arr, criteria, orders) {
  return arr.slice().sort((a, b) => {
    const ordersLength = orders.length;
    for (let i = 0; i < criteria.length; i++) {
      const order = ordersLength > i ? orders[i] : orders[ordersLength - 1];
      const criterion = criteria[i];
      const criterionIsFunction = typeof criterion === "function";
      const valueA = criterionIsFunction ? criterion(a) : a[criterion];
      const valueB = criterionIsFunction ? criterion(b) : b[criterion];
      const result = compareValues(valueA, valueB, order);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  });
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/array/sortBy.mjs
function sortBy(arr, criteria) {
  return orderBy(arr, criteria, ["asc"]);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/function/before.mjs
function before(n, func) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }
  let counter = 0;
  return (...args) => {
    if (++counter < n) {
      return func(...args);
    }
    return void 0;
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/function/curry.mjs
function curry(func) {
  if (func.length === 0 || func.length === 1) {
    return func;
  }
  return function(arg) {
    return makeCurry(func, func.length, [arg]);
  };
}
function makeCurry(origin, argsLength, args) {
  if (args.length === argsLength) {
    return origin(...args);
  } else {
    const next = function(arg) {
      return makeCurry(origin, argsLength, [...args, arg]);
    };
    return next;
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/function/curryRight.mjs
function curryRight(func) {
  if (func.length === 0 || func.length === 1) {
    return func;
  }
  return function(arg) {
    return makeCurryRight(func, func.length, [arg]);
  };
}
function makeCurryRight(origin, argsLength, args) {
  if (args.length === argsLength) {
    return origin(...args);
  } else {
    const next = function(arg) {
      return makeCurryRight(origin, argsLength, [arg, ...args]);
    };
    return next;
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/function/spread.mjs
function spread(func) {
  return function(argsArr) {
    return func.apply(this, argsArr);
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/function/throttle.mjs
function throttle(func, throttleMs, { signal, edges = ["leading", "trailing"] } = {}) {
  let pendingAt = null;
  const debounced = debounce(func, throttleMs, { signal, edges });
  const throttled = function(...args) {
    if (pendingAt == null) {
      pendingAt = Date.now();
    } else {
      if (Date.now() - pendingAt >= throttleMs) {
        pendingAt = Date.now();
        debounced.cancel();
        debounced(...args);
      }
    }
    debounced(...args);
  };
  throttled.cancel = debounced.cancel;
  throttled.flush = debounced.flush;
  return throttled;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/math/round.mjs
function round(value, precision = 0) {
  if (!Number.isInteger(precision)) {
    throw new Error("Precision must be an integer.");
  }
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/math/sumBy.mjs
function sumBy(items, getValue) {
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    result += getValue(items[i]);
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/object/mergeWith.mjs
function mergeWith(target, source, merge2) {
  const sourceKeys = Object.keys(source);
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
    const sourceValue = source[key];
    const targetValue = target[key];
    const merged = merge2(targetValue, sourceValue, key, target, source);
    if (merged != null) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      target[key] = mergeWith(targetValue ?? [], sourceValue, merge2);
    } else if (isObjectLike(targetValue) && isObjectLike(sourceValue)) {
      target[key] = mergeWith(targetValue ?? {}, sourceValue, merge2);
    } else if (targetValue === void 0 || sourceValue !== void 0) {
      target[key] = sourceValue;
    }
  }
  return target;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/object/omit.mjs
function omit(obj, keys) {
  const result = { ...obj };
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    delete result[key];
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/object/pick.mjs
function pick(obj, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (Object.hasOwn(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/string/startCase.mjs
function startCase(str) {
  const words$1 = words(str.trim());
  let result = "";
  for (let i = 0; i < words$1.length; i++) {
    const word = words$1[i];
    if (result) {
      result += " ";
    }
    result += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return result;
}
export {
  AbortError,
  TimeoutError,
  after,
  ary,
  at,
  before,
  camelCase,
  capitalize,
  chunk,
  clamp,
  clone,
  cloneDeep,
  compact,
  constantCase,
  countBy,
  curry,
  curryRight,
  debounce,
  deburr,
  delay,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  escape,
  escapeRegExp,
  fill,
  findKey,
  flatMap,
  flatMapDeep,
  flatten,
  flattenDeep,
  flattenObject,
  flow,
  flowRight,
  forEachRight,
  groupBy,
  head,
  identity,
  inRange,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  invariant,
  invert,
  isArrayBuffer,
  isBlob,
  isBoolean,
  isDate,
  isEqual,
  isEqualWith,
  isError,
  isFile,
  isFunction,
  isJSONArray,
  isJSONObject,
  isJSONValue,
  isLength,
  isMap,
  isNil,
  isNotNil,
  isNull,
  isPlainObject,
  isPrimitive,
  isRegExp,
  isSet,
  isString,
  isSubset,
  isSubsetWith,
  isSymbol,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  kebabCase,
  keyBy,
  last,
  lowerCase,
  lowerFirst,
  mapKeys,
  mapValues,
  maxBy,
  mean,
  meanBy,
  median,
  medianBy,
  memoize,
  merge,
  mergeWith,
  minBy,
  negate,
  noop,
  omit,
  omitBy,
  once,
  orderBy,
  pad,
  partial,
  partialRight,
  partition,
  pascalCase,
  pick,
  pickBy,
  pullAt,
  random,
  randomInt,
  range,
  rangeRight,
  rest,
  round,
  sample,
  sampleSize,
  shuffle,
  snakeCase,
  sortBy,
  spread,
  startCase,
  sum,
  sumBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  throttle,
  timeout,
  toFilled,
  toMerged,
  trim,
  trimEnd,
  trimStart,
  unary,
  unescape,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unzip,
  unzipWith,
  upperCase,
  upperFirst,
  withTimeout,
  without,
  words,
  xor,
  xorBy,
  xorWith,
  zip,
  zipObject,
  zipWith
};
//# sourceMappingURL=es-toolkit.js.map
