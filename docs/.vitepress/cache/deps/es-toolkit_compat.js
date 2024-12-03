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
  copyProperties,
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
} from "./chunk-AK7TER6B.js";
import {
  argumentsTag,
  booleanTag,
  eq,
  getSymbols,
  getTag,
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
  isPrimitive,
  isRegExp,
  isSet,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  noop,
  numberTag,
  stringTag
} from "./chunk-Z3SB3XGQ.js";
import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/castArray.mjs
function castArray(value) {
  if (arguments.length === 0) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function toArray(value) {
  return Array.isArray(value) ? value : Array.from(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function isArrayLike(value) {
  return value != null && typeof value !== "function" && isLength(value.length);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/chunk.mjs
function chunk2(arr, size2 = 1) {
  size2 = Math.max(Math.floor(size2), 0);
  if (size2 === 0 || !isArrayLike(arr)) {
    return [];
  }
  return chunk(toArray(arr), size2);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/compact.mjs
function compact2(arr) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return compact(Array.from(arr));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/concat.mjs
function concat(...values) {
  return flatten(values);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isArrayLikeObject.mjs
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/difference.mjs
function difference2(arr, ...values) {
  if (!isArrayLikeObject(arr)) {
    return [];
  }
  const arr1 = toArray(arr);
  const arr2 = [];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (isArrayLikeObject(value)) {
      arr2.push(...Array.from(value));
    }
  }
  return difference(arr1, arr2);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/last.mjs
function last2(array) {
  if (!isArrayLike(array)) {
    return void 0;
  }
  return last(toArray(array));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/flattenArrayLike.mjs
function flattenArrayLike(values) {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    const arrayLike = values[i];
    if (!isArrayLikeObject(arrayLike)) {
      continue;
    }
    for (let j = 0; j < arrayLike.length; j++) {
      result.push(arrayLike[j]);
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/isDeepKey.mjs
function isDeepKey(key) {
  switch (typeof key) {
    case "number":
    case "symbol": {
      return false;
    }
    case "string": {
      return key.includes(".") || key.includes("[") || key.includes("]");
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/toKey.mjs
function toKey(value) {
  if (Object.is(value, -0)) {
    return "-0";
  }
  return value.toString();
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/toPath.mjs
function toPath(deepKey) {
  const result = [];
  const length = deepKey.length;
  if (length === 0) {
    return result;
  }
  let index = 0;
  let key = "";
  let quoteChar = "";
  let bracket = false;
  if (deepKey.charCodeAt(0) === 46) {
    result.push("");
    index++;
  }
  while (index < length) {
    const char = deepKey[index];
    if (quoteChar) {
      if (char === "\\" && index + 1 < length) {
        index++;
        key += deepKey[index];
      } else if (char === quoteChar) {
        quoteChar = "";
      } else {
        key += char;
      }
    } else if (bracket) {
      if (char === '"' || char === "'") {
        quoteChar = char;
      } else if (char === "]") {
        bracket = false;
        result.push(key);
        key = "";
      } else {
        key += char;
      }
    } else {
      if (char === "[") {
        bracket = true;
        if (key) {
          result.push(key);
          key = "";
        }
      } else if (char === ".") {
        if (key) {
          result.push(key);
          key = "";
        }
      } else {
        key += char;
      }
    }
    index++;
  }
  if (key) {
    result.push(key);
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/get.mjs
function get(object, path, defaultValue) {
  if (object == null) {
    return defaultValue;
  }
  switch (typeof path) {
    case "string": {
      const result = object[path];
      if (result === void 0) {
        if (isDeepKey(path)) {
          return get(object, toPath(path), defaultValue);
        } else {
          return defaultValue;
        }
      }
      return result;
    }
    case "number":
    case "symbol": {
      if (typeof path === "number") {
        path = toKey(path);
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
    default: {
      if (Array.isArray(path)) {
        return getWithPath(object, path, defaultValue);
      }
      if (Object.is(path == null ? void 0 : path.valueOf(), -0)) {
        path = "-0";
      } else {
        path = String(path);
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
  }
}
function getWithPath(object, path, defaultValue) {
  if (path.length === 0) {
    return defaultValue;
  }
  let current = object;
  for (let index = 0; index < path.length; index++) {
    if (current == null) {
      return defaultValue;
    }
    current = current[path[index]];
  }
  if (current === void 0) {
    return defaultValue;
  }
  return current;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/property.mjs
function property(path) {
  return function(object) {
    return get(object, path);
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isObject.mjs
function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isMatch.mjs
function isMatch(target, source) {
  if (source === target) {
    return true;
  }
  switch (typeof source) {
    case "object": {
      if (source == null) {
        return true;
      }
      const keys = Object.keys(source);
      if (target == null) {
        if (keys.length === 0) {
          return true;
        }
        return false;
      }
      if (Array.isArray(source)) {
        return isArrayMatch(target, source);
      }
      if (source instanceof Map) {
        return isMapMatch(target, source);
      }
      if (source instanceof Set) {
        return isSetMatch(target, source);
      }
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!isPrimitive(target) && !(key in target)) {
          return false;
        }
        if (source[key] === void 0 && target[key] !== void 0) {
          return false;
        }
        if (source[key] === null && target[key] !== null) {
          return false;
        }
        if (!isMatch(target[key], source[key])) {
          return false;
        }
      }
      return true;
    }
    case "function": {
      if (Object.keys(source).length > 0) {
        return isMatch(target, { ...source });
      }
      return false;
    }
    default: {
      if (!isObject(target)) {
        return eq(target, source);
      }
      return !source;
    }
  }
}
function isMapMatch(target, source) {
  if (source.size === 0) {
    return true;
  }
  if (!(target instanceof Map)) {
    return false;
  }
  for (const [key, value] of source.entries()) {
    if (!isMatch(target.get(key), value)) {
      return false;
    }
  }
  return true;
}
function isArrayMatch(target, source) {
  if (source.length === 0) {
    return true;
  }
  if (!Array.isArray(target)) {
    return false;
  }
  const countedIndex = /* @__PURE__ */ new Set();
  for (let i = 0; i < source.length; i++) {
    const sourceItem = source[i];
    const index = target.findIndex((targetItem, index2) => {
      return isMatch(targetItem, sourceItem) && !countedIndex.has(index2);
    });
    if (index === -1) {
      return false;
    }
    countedIndex.add(index);
  }
  return true;
}
function isSetMatch(target, source) {
  if (source.size === 0) {
    return true;
  }
  if (!(target instanceof Set)) {
    return false;
  }
  return isArrayMatch([...target], [...source]);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/matches.mjs
function matches(source) {
  source = cloneDeep(source);
  return (target) => {
    return isMatch(target, source);
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
function cloneDeep2(obj) {
  if (typeof obj !== "object") {
    return cloneDeep(obj);
  }
  switch (Object.prototype.toString.call(obj)) {
    case numberTag:
    case stringTag:
    case booleanTag: {
      const result = new obj.constructor(obj == null ? void 0 : obj.valueOf());
      copyProperties(result, obj);
      return result;
    }
    case argumentsTag: {
      const result = {};
      copyProperties(result, obj);
      result.length = obj.length;
      result[Symbol.iterator] = obj[Symbol.iterator];
      return result;
    }
    default: {
      return cloneDeep(obj);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs
var IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value) {
  switch (typeof value) {
    case "number": {
      return Number.isInteger(value) && value >= 0 && value < Number.MAX_SAFE_INTEGER;
    }
    case "symbol": {
      return false;
    }
    case "string": {
      return IS_UNSIGNED_INTEGER.test(value);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
function isArguments(value) {
  return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/has.mjs
function has(object, path) {
  let resolvedPath;
  if (Array.isArray(path)) {
    resolvedPath = path;
  } else if (typeof path === "string" && isDeepKey(path) && (object == null ? void 0 : object[path]) == null) {
    resolvedPath = toPath(path);
  } else {
    resolvedPath = [path];
  }
  if (resolvedPath.length === 0) {
    return false;
  }
  let current = object;
  for (let i = 0; i < resolvedPath.length; i++) {
    const key = resolvedPath[i];
    if (current == null || !Object.hasOwn(current, key)) {
      const isSparseIndex = (Array.isArray(current) || isArguments(current)) && isIndex(key) && key < current.length;
      if (!isSparseIndex) {
        return false;
      }
    }
    current = current[key];
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/matchesProperty.mjs
function matchesProperty(property2, source) {
  switch (typeof property2) {
    case "object": {
      if (Object.is(property2 == null ? void 0 : property2.valueOf(), -0)) {
        property2 = "-0";
      }
      break;
    }
    case "number": {
      property2 = toKey(property2);
      break;
    }
  }
  source = cloneDeep2(source);
  return function(target) {
    const result = get(target, property2);
    if (result === void 0) {
      return has(target, property2);
    }
    if (source === void 0) {
      return result === void 0;
    }
    return isMatch(result, source);
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/iteratee.mjs
function iteratee(value) {
  if (value == null) {
    return identity;
  }
  switch (typeof value) {
    case "function": {
      return value;
    }
    case "object": {
      if (Array.isArray(value) && value.length === 2) {
        return matchesProperty(value[0], value[1]);
      }
      return matches(value);
    }
    case "string":
    case "symbol":
    case "number": {
      return property(value);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/differenceBy.mjs
function differenceBy2(arr, ..._values) {
  if (!isArrayLikeObject(arr)) {
    return [];
  }
  const iteratee$1 = last2(_values);
  const values = flattenArrayLike(_values);
  if (isArrayLikeObject(iteratee$1)) {
    return difference(Array.from(arr), values);
  }
  return differenceBy(Array.from(arr), values, iteratee(iteratee$1));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isSymbol.mjs
function isSymbol(value) {
  return typeof value === "symbol" || value instanceof Symbol;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/toNumber.mjs
function toNumber(value) {
  if (isSymbol(value)) {
    return NaN;
  }
  return Number(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/toFinite.mjs
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === Infinity || value === -Infinity) {
    const sign = value < 0 ? -1 : 1;
    return sign * Number.MAX_VALUE;
  }
  return value === value ? value : 0;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/toInteger.mjs
function toInteger(value) {
  const finite = toFinite(value);
  const remainder = finite % 1;
  return remainder ? finite - remainder : finite;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/drop.mjs
function drop2(collection, itemsCount = 1, guard) {
  if (!isArrayLike(collection)) {
    return [];
  }
  itemsCount = guard ? 1 : toInteger(itemsCount);
  return drop(toArray(collection), itemsCount);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/dropRight.mjs
function dropRight2(collection, itemsCount = 1, guard) {
  if (!isArrayLike(collection)) {
    return [];
  }
  itemsCount = guard ? 1 : toInteger(itemsCount);
  return dropRight(toArray(collection), itemsCount);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/dropRightWhile.mjs
function dropRightWhile2(arr, predicate) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return dropRightWhileImpl(Array.from(arr), predicate);
}
function dropRightWhileImpl(arr, predicate) {
  switch (typeof predicate) {
    case "function": {
      return dropRightWhile(arr, (item, index, arr2) => Boolean(predicate(item, index, arr2)));
    }
    case "object": {
      if (Array.isArray(predicate) && predicate.length === 2) {
        const key = predicate[0];
        const value = predicate[1];
        return dropRightWhile(arr, matchesProperty(key, value));
      } else {
        return dropRightWhile(arr, matches(predicate));
      }
    }
    case "string": {
      return dropRightWhile(arr, property(predicate));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/dropWhile.mjs
function dropWhile2(arr, predicate) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return dropWhileImpl(toArray(arr), predicate);
}
function dropWhileImpl(arr, predicate) {
  switch (typeof predicate) {
    case "function": {
      return dropWhile(arr, (item, index, arr2) => Boolean(predicate(item, index, arr2)));
    }
    case "object": {
      if (Array.isArray(predicate) && predicate.length === 2) {
        const key = predicate[0];
        const value = predicate[1];
        return dropWhile(arr, matchesProperty(key, value));
      } else {
        return dropWhile(arr, matches(predicate));
      }
    }
    case "string": {
      return dropWhile(arr, property(predicate));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/isIterateeCall.mjs
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  if (typeof index === "number" && isArrayLike(object) && isIndex(index) && index < object.length || typeof index === "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/every.mjs
function every(source, doesMatch, guard) {
  if (!source) {
    return true;
  }
  const values = Array.isArray(source) ? source : Object.values(source);
  if (guard && isIterateeCall(source, doesMatch, guard)) {
    doesMatch = void 0;
  }
  if (!doesMatch) {
    doesMatch = identity;
  }
  switch (typeof doesMatch) {
    case "function": {
      if (!Array.isArray(source)) {
        const keys = Object.keys(source);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = source[key];
          if (!doesMatch(value, key, source)) {
            return false;
          }
        }
        return true;
      }
      return values.every(doesMatch);
    }
    case "object": {
      if (Array.isArray(doesMatch) && doesMatch.length === 2) {
        const key = doesMatch[0];
        const value = doesMatch[1];
        return values.every(matchesProperty(key, value));
      } else {
        return values.every(matches(doesMatch));
      }
    }
    case "string": {
      return values.every(property(doesMatch));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isString.mjs
function isString(value) {
  return typeof value === "string" || value instanceof String;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/fill.mjs
function fill2(array, value, start = 0, end = array ? array.length : 0) {
  if (!isArrayLike(array)) {
    return [];
  }
  if (isString(array)) {
    return array;
  }
  start = Math.floor(start);
  end = Math.floor(end);
  if (!start) {
    start = 0;
  }
  if (!end) {
    end = 0;
  }
  return fill(array, value, start, end);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isArray.mjs
function isArray(value) {
  return Array.isArray(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/filter.mjs
function filter(source, predicate) {
  if (!source) {
    return [];
  }
  if (!predicate) {
    predicate = identity;
  }
  const collection = isArray(source) ? source : Object.values(source);
  switch (typeof predicate) {
    case "function": {
      if (!Array.isArray(source)) {
        const result = [];
        const keys = Object.keys(source);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = source[key];
          if (predicate(value, key, source)) {
            result.push(value);
          }
        }
        return result;
      }
      return collection.filter(predicate);
    }
    case "object": {
      return isArray(predicate) ? collection.filter(matchesProperty(predicate[0], predicate[1])) : collection.filter(matches(predicate));
    }
    case "string": {
      return collection.filter(property(predicate));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/find.mjs
function find(source, doesMatch) {
  if (!source) {
    return void 0;
  }
  const values = Array.isArray(source) ? source : Object.values(source);
  switch (typeof doesMatch) {
    case "function": {
      if (!Array.isArray(source)) {
        const keys = Object.keys(source);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = source[key];
          if (doesMatch(value, key, source)) {
            return value;
          }
        }
        return void 0;
      }
      return values.find(doesMatch);
    }
    case "object": {
      if (Array.isArray(doesMatch) && doesMatch.length === 2) {
        const key = doesMatch[0];
        const value = doesMatch[1];
        return values.find(matchesProperty(key, value));
      } else {
        return values.find(matches(doesMatch));
      }
    }
    case "string": {
      return values.find(property(doesMatch));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/findIndex.mjs
function findIndex(arr, doesMatch, fromIndex = 0) {
  if (!arr) {
    return -1;
  }
  if (fromIndex < 0) {
    fromIndex = Math.max(arr.length + fromIndex, 0);
  }
  const subArray = Array.from(arr).slice(fromIndex);
  let index = -1;
  switch (typeof doesMatch) {
    case "function": {
      index = subArray.findIndex(doesMatch);
      break;
    }
    case "object": {
      if (Array.isArray(doesMatch) && doesMatch.length === 2) {
        const key = doesMatch[0];
        const value = doesMatch[1];
        index = subArray.findIndex(matchesProperty(key, value));
      } else {
        index = subArray.findIndex(matches(doesMatch));
      }
      break;
    }
    case "string": {
      index = subArray.findIndex(property(doesMatch));
    }
  }
  return index === -1 ? -1 : index + fromIndex;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/findLastIndex.mjs
function findLastIndex(arr, doesMatch, fromIndex = arr ? arr.length - 1 : 0) {
  if (!arr) {
    return -1;
  }
  if (fromIndex < 0) {
    fromIndex = Math.max(arr.length + fromIndex, 0);
  } else {
    fromIndex = Math.min(fromIndex, arr.length - 1);
  }
  const subArray = toArray(arr).slice(0, fromIndex + 1);
  switch (typeof doesMatch) {
    case "function": {
      return subArray.findLastIndex(doesMatch);
    }
    case "object": {
      if (Array.isArray(doesMatch) && doesMatch.length === 2) {
        const key = doesMatch[0];
        const value = doesMatch[1];
        return subArray.findLastIndex(matchesProperty(key, value));
      } else {
        return subArray.findLastIndex(matches(doesMatch));
      }
    }
    case "string": {
      return subArray.findLastIndex(property(doesMatch));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/flatten.mjs
function flatten2(value, depth = 1) {
  const result = [];
  const flooredDepth = Math.floor(depth);
  if (!isArrayLike(value)) {
    return result;
  }
  const recursive = (arr, currentDepth) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (currentDepth < flooredDepth && (Array.isArray(item) || Boolean(item == null ? void 0 : item[Symbol.isConcatSpreadable]) || item !== null && typeof item === "object" && Object.prototype.toString.call(item) === "[object Arguments]")) {
        if (Array.isArray(item)) {
          recursive(item, currentDepth + 1);
        } else {
          recursive(Array.from(item), currentDepth + 1);
        }
      } else {
        result.push(item);
      }
    }
  };
  recursive(Array.from(value), 0);
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/flattenDeep.mjs
function flattenDeep(value) {
  return flatten2(value, Infinity);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/flattenDepth.mjs
function flattenDepth(value, depth = 1) {
  return flatten2(value, depth);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/forEach.mjs
function forEach(collection, callback = identity) {
  if (!collection) {
    return collection;
  }
  const keys = isArrayLike(collection) || Array.isArray(collection) ? range(0, collection.length) : Object.keys(collection);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = collection[key];
    const result = callback(value, key, collection);
    if (result === false) {
      break;
    }
  }
  return collection;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/head.mjs
function head2(arr) {
  if (!isArrayLike(arr)) {
    return void 0;
  }
  return head(toArray(arr));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/includes.mjs
function includes(source, target, fromIndex, guard) {
  if (source == null) {
    return false;
  }
  if (guard || !fromIndex) {
    fromIndex = 0;
  } else {
    fromIndex = toInteger(fromIndex);
  }
  if (isString(source)) {
    if (fromIndex > source.length || target instanceof RegExp) {
      return false;
    }
    if (fromIndex < 0) {
      fromIndex = Math.max(0, source.length + fromIndex);
    }
    return source.includes(target, fromIndex);
  }
  if (Array.isArray(source)) {
    return source.includes(target, fromIndex);
  }
  const keys = Object.keys(source);
  if (fromIndex < 0) {
    fromIndex = Math.max(0, keys.length + fromIndex);
  }
  for (let i = fromIndex; i < keys.length; i++) {
    const value = Reflect.get(source, keys[i]);
    if (eq(value, target)) {
      return true;
    }
  }
  return false;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/indexOf.mjs
function indexOf(array, searchElement, fromIndex) {
  if (!isArrayLike(array)) {
    return -1;
  }
  if (Number.isNaN(searchElement)) {
    fromIndex = fromIndex ?? 0;
    if (fromIndex < 0) {
      fromIndex = Math.max(0, array.length + fromIndex);
    }
    for (let i = fromIndex; i < array.length; i++) {
      if (Number.isNaN(array[i])) {
        return i;
      }
    }
    return -1;
  }
  return Array.from(array).indexOf(searchElement, fromIndex);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/intersection.mjs
function intersection2(...arrays) {
  if (arrays.length === 0) {
    return [];
  }
  if (!isArrayLikeObject(arrays[0])) {
    return [];
  }
  let result = uniq(Array.from(arrays[0]));
  for (let i = 1; i < arrays.length; i++) {
    const array = arrays[i];
    if (!isArrayLikeObject(array)) {
      return [];
    }
    result = intersection(result, Array.from(array));
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/intersectionBy.mjs
function intersectionBy2(array, ...values) {
  if (!isArrayLikeObject(array)) {
    return [];
  }
  const lastValue = last(values);
  if (lastValue === void 0) {
    return Array.from(array);
  }
  let result = uniq(Array.from(array));
  const count = isArrayLikeObject(lastValue) ? values.length : values.length - 1;
  for (let i = 0; i < count; ++i) {
    const value = values[i];
    if (!isArrayLikeObject(value)) {
      return [];
    }
    if (isArrayLikeObject(lastValue)) {
      result = intersectionBy(result, Array.from(value), identity);
    } else if (typeof lastValue === "function") {
      result = intersectionBy(result, Array.from(value), (value2) => lastValue(value2));
    } else if (typeof lastValue === "string") {
      result = intersectionBy(result, Array.from(value), property(lastValue));
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/join.mjs
function join(array, separator = ",") {
  if (!isArrayLike(array)) {
    return "";
  }
  return Array.from(array).join(separator);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/compareValues.mjs
function getPriority(a) {
  if (typeof a === "symbol") {
    return 1;
  }
  if (a === null) {
    return 2;
  }
  if (a === void 0) {
    return 3;
  }
  if (a !== a) {
    return 4;
  }
  return 0;
}
var compareValues = (a, b, order) => {
  if (a !== b) {
    if (typeof a === "string" && typeof b === "string") {
      return order === "desc" ? b.localeCompare(a) : a.localeCompare(b);
    }
    const aPriority = getPriority(a);
    const bPriority = getPriority(b);
    if (aPriority === bPriority && aPriority === 0) {
      if (a < b) {
        return order === "desc" ? 1 : -1;
      }
      if (a > b) {
        return order === "desc" ? -1 : 1;
      }
    }
    return order === "desc" ? bPriority - aPriority : aPriority - bPriority;
  }
  return 0;
};

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/isKey.mjs
var regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false;
  }
  if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object != null;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/orderBy.mjs
function orderBy(collection, criteria, orders, guard) {
  if (collection == null) {
    return [];
  }
  orders = guard ? void 0 : orders;
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }
  if (!Array.isArray(criteria)) {
    criteria = criteria == null ? [null] : [criteria];
  }
  if (criteria.length === 0) {
    criteria = [null];
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  orders = orders.map((order) => String(order));
  const getValueByNestedPath = (object, path) => {
    let target = object;
    for (let i = 0; i < path.length && target != null; ++i) {
      target = target[path[i]];
    }
    return target;
  };
  const getValueByCriterion = (criterion, object) => {
    if (object == null || criterion == null) {
      return object;
    }
    if (typeof criterion === "object" && "key" in criterion) {
      if (Object.hasOwn(object, criterion.key)) {
        return object[criterion.key];
      }
      return getValueByNestedPath(object, criterion.path);
    }
    if (typeof criterion === "function") {
      return criterion(object);
    }
    if (Array.isArray(criterion)) {
      return getValueByNestedPath(object, criterion);
    }
    if (typeof object === "object") {
      return object[criterion];
    }
    return object;
  };
  const preparedCriteria = criteria.map((criterion) => {
    if (Array.isArray(criterion) && criterion.length === 1) {
      criterion = criterion[0];
    }
    if (criterion == null || typeof criterion === "function" || Array.isArray(criterion) || isKey(criterion)) {
      return criterion;
    }
    return { key: criterion, path: toPath(criterion) };
  });
  const preparedCollection = collection.map((item) => ({
    original: item,
    criteria: preparedCriteria.map((criterion) => getValueByCriterion(criterion, item))
  }));
  return preparedCollection.slice().sort((a, b) => {
    for (let i = 0; i < preparedCriteria.length; i++) {
      const comparedResult = compareValues(a.criteria[i], b.criteria[i], orders[i]);
      if (comparedResult !== 0) {
        return comparedResult;
      }
    }
    return 0;
  }).map((item) => item.original);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/sample.mjs
function sample2(collection) {
  if (collection == null) {
    return void 0;
  }
  if (isArrayLike(collection)) {
    return sample(toArray(collection));
  }
  return sample(Object.values(collection));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/size.mjs
function size(target) {
  if (isNil(target)) {
    return 0;
  }
  if (target instanceof Map || target instanceof Set) {
    return target.size;
  }
  return Object.keys(target).length;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/slice.mjs
function slice(array, start, end) {
  if (!isArrayLike(array)) {
    return [];
  }
  const length = array.length;
  if (end === void 0) {
    end = length;
  } else if (typeof end !== "number" && isIterateeCall(array, start, end)) {
    start = 0;
    end = length;
  }
  start = toInteger(start);
  end = toInteger(end);
  if (start < 0) {
    start = Math.max(length + start, 0);
  } else {
    start = Math.min(start, length);
  }
  if (end < 0) {
    end = Math.max(length + end, 0);
  } else {
    end = Math.min(end, length);
  }
  const resultLength = Math.max(end - start, 0);
  const result = new Array(resultLength);
  for (let i = 0; i < resultLength; ++i) {
    result[i] = array[start + i];
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/some.mjs
function some(source, predicate, guard) {
  if (!source) {
    return false;
  }
  if (guard != null) {
    predicate = void 0;
  }
  if (!predicate) {
    predicate = identity;
  }
  const values = Array.isArray(source) ? source : Object.values(source);
  switch (typeof predicate) {
    case "function": {
      if (!Array.isArray(source)) {
        const keys = Object.keys(source);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = source[key];
          if (predicate(value, key, source)) {
            return true;
          }
        }
        return false;
      }
      return values.some(predicate);
    }
    case "object": {
      if (Array.isArray(predicate) && predicate.length === 2) {
        const key = predicate[0];
        const value = predicate[1];
        return values.some(matchesProperty(key, value));
      } else {
        return values.some(matches(predicate));
      }
    }
    case "string": {
      return values.some(property(predicate));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/sortBy.mjs
function sortBy(collection, ...criteria) {
  const length = criteria.length;
  if (length > 1 && isIterateeCall(collection, criteria[0], criteria[1])) {
    criteria = [];
  } else if (length > 2 && isIterateeCall(criteria[0], criteria[1], criteria[2])) {
    criteria = [criteria[0]];
  }
  return orderBy(collection, flatten(criteria), ["asc"]);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/tail.mjs
function tail2(arr) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return tail(toArray(arr));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/take.mjs
function take2(arr, count = 1, guard) {
  count = guard ? 1 : toInteger(count);
  if (count < 1 || !isArrayLike(arr)) {
    return [];
  }
  return take(toArray(arr), count);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/takeRight.mjs
function takeRight2(arr, count = 1, guard) {
  count = guard ? 1 : toInteger(count);
  if (count <= 0 || !isArrayLike(arr)) {
    return [];
  }
  return takeRight(toArray(arr), count);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/union.mjs
function union(...arrays) {
  const validArrays = arrays.filter(isArrayLikeObject);
  const flattened = flatten2(validArrays, 1);
  return uniq(flattened);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/uniq.mjs
function uniq2(arr) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return uniq(Array.from(arr));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/uniqBy.mjs
function uniqBy2(arr, ...values) {
  if (!isArrayLikeObject(arr)) {
    return [];
  }
  const iteratee$1 = last2(values);
  if (iteratee$1 === void 0) {
    return Array.from(arr);
  }
  const validArrays = values.slice(0, -1).filter(isArrayLikeObject);
  const flattenedArrays = flatten2(validArrays);
  const allValues = [...Array.from(arr), ...flattenedArrays];
  if (isArrayLikeObject(iteratee$1)) {
    return uniq(allValues);
  }
  return uniqBy(allValues, iteratee(iteratee$1));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/unzip.mjs
function unzip2(array) {
  if (!isArrayLikeObject(array) || !array.length) {
    return [];
  }
  if (Array.isArray(array)) {
    return unzip(array);
  }
  return unzip(Array.from(array, (value) => Array.from(value)));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/without.mjs
function without2(array, ...values) {
  if (!isArrayLikeObject(array)) {
    return [];
  }
  return without(Array.from(array), ...values);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/zip.mjs
function zip2(...arrays) {
  if (!arrays.length) {
    return [];
  }
  return zip(...arrays.filter((group) => isArrayLikeObject(group)));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/set.mjs
function set(obj, path, value) {
  const resolvedPath = Array.isArray(path) ? path : typeof path === "string" ? toPath(path) : [path];
  let current = obj;
  for (let i = 0; i < resolvedPath.length - 1; i++) {
    const key = resolvedPath[i];
    const nextKey = resolvedPath[i + 1];
    if (current[key] == null) {
      current[key] = isIndex(nextKey) ? [] : {};
    }
    current = current[key];
  }
  const lastKey = resolvedPath[resolvedPath.length - 1];
  current[lastKey] = value;
  return obj;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/array/zipObjectDeep.mjs
function zipObjectDeep(keys, values) {
  const result = {};
  if (!isArrayLike(keys)) {
    return result;
  }
  if (!isArrayLike(values)) {
    values = [];
  }
  const zipped = zip(Array.from(keys), Array.from(values));
  for (let i = 0; i < zipped.length; i++) {
    const [key, value] = zipped[i];
    if (key != null) {
      set(result, key, value);
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/ary.mjs
function ary2(func, n = func.length, guard) {
  if (guard) {
    n = func.length;
  }
  if (Number.isNaN(n) || n < 0) {
    n = 0;
  }
  return ary(func, n);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/attempt.mjs
function attempt(func, ...args) {
  try {
    return func(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/before.mjs
function before(n, func) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  let result;
  n = toInteger(n);
  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args);
    }
    if (n <= 1 && func) {
      func = void 0;
    }
    return result;
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/bind.mjs
function bind(func, thisObj, ...partialArgs) {
  const bound = function(...providedArgs) {
    const args = [];
    let startIndex = 0;
    for (let i = 0; i < partialArgs.length; i++) {
      const arg = partialArgs[i];
      if (arg === bind.placeholder) {
        args.push(providedArgs[startIndex++]);
      } else {
        args.push(arg);
      }
    }
    for (let i = startIndex; i < providedArgs.length; i++) {
      args.push(providedArgs[i]);
    }
    if (this instanceof bound) {
      return new func(...args);
    }
    return func.apply(thisObj, args);
  };
  return bound;
}
var bindPlaceholder = Symbol("bind.placeholder");
bind.placeholder = bindPlaceholder;

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/bindKey.mjs
function bindKey(object, key, ...partialArgs) {
  const bound = function(...providedArgs) {
    const args = [];
    let startIndex = 0;
    for (let i = 0; i < partialArgs.length; i++) {
      const arg = partialArgs[i];
      if (arg === bindKey.placeholder) {
        args.push(providedArgs[startIndex++]);
      } else {
        args.push(arg);
      }
    }
    for (let i = startIndex; i < providedArgs.length; i++) {
      args.push(providedArgs[i]);
    }
    if (this instanceof bound) {
      return new object[key](...args);
    }
    return object[key].apply(object, args);
  };
  return bound;
}
var bindKeyPlaceholder = Symbol("bindKey.placeholder");
bindKey.placeholder = bindKeyPlaceholder;

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/curry.mjs
function curry(func, arity = func.length, guard) {
  arity = guard ? func.length : arity;
  arity = Number.parseInt(arity, 10);
  if (Number.isNaN(arity) || arity < 1) {
    arity = 0;
  }
  const wrapper = function(...partialArgs) {
    const holders = partialArgs.filter((item) => item === curry.placeholder);
    const length = partialArgs.length - holders.length;
    if (length < arity) {
      return makeCurry(func, arity - length, partialArgs);
    }
    if (this instanceof wrapper) {
      return new func(...partialArgs);
    }
    return func.apply(this, partialArgs);
  };
  wrapper.placeholder = curryPlaceholder;
  return wrapper;
}
function makeCurry(func, arity, partialArgs) {
  function wrapper(...providedArgs) {
    const holders = providedArgs.filter((item) => item === curry.placeholder);
    const length = providedArgs.length - holders.length;
    providedArgs = composeArgs(providedArgs, partialArgs);
    if (length < arity) {
      return makeCurry(func, arity - length, providedArgs);
    }
    if (this instanceof wrapper) {
      return new func(...providedArgs);
    }
    return func.apply(this, providedArgs);
  }
  wrapper.placeholder = curryPlaceholder;
  return wrapper;
}
function composeArgs(providedArgs, partialArgs) {
  const args = [];
  let startIndex = 0;
  for (let i = 0; i < partialArgs.length; i++) {
    const arg = partialArgs[i];
    if (arg === curry.placeholder && startIndex < providedArgs.length) {
      args.push(providedArgs[startIndex++]);
    } else {
      args.push(arg);
    }
  }
  for (let i = startIndex; i < providedArgs.length; i++) {
    args.push(providedArgs[i]);
  }
  return args;
}
var curryPlaceholder = Symbol("curry.placeholder");
curry.placeholder = curryPlaceholder;

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/curryRight.mjs
function curryRight(func, arity = func.length, guard) {
  arity = guard ? func.length : arity;
  arity = Number.parseInt(arity, 10);
  if (Number.isNaN(arity) || arity < 1) {
    arity = 0;
  }
  const wrapper = function(...partialArgs) {
    const holders = partialArgs.filter((item) => item === curryRight.placeholder);
    const length = partialArgs.length - holders.length;
    if (length < arity) {
      return makeCurryRight(func, arity - length, partialArgs);
    }
    if (this instanceof wrapper) {
      return new func(...partialArgs);
    }
    return func.apply(this, partialArgs);
  };
  wrapper.placeholder = curryRightPlaceholder;
  return wrapper;
}
function makeCurryRight(func, arity, partialArgs) {
  function wrapper(...providedArgs) {
    const holders = providedArgs.filter((item) => item === curryRight.placeholder);
    const length = providedArgs.length - holders.length;
    providedArgs = composeArgs2(providedArgs, partialArgs);
    if (length < arity) {
      return makeCurryRight(func, arity - length, providedArgs);
    }
    if (this instanceof wrapper) {
      return new func(...providedArgs);
    }
    return func.apply(this, providedArgs);
  }
  wrapper.placeholder = curryRightPlaceholder;
  return wrapper;
}
function composeArgs2(providedArgs, partialArgs) {
  const placeholderLength = partialArgs.filter((arg) => arg === curryRight.placeholder).length;
  const rangeLength = Math.max(providedArgs.length - placeholderLength, 0);
  const args = [];
  let providedIndex = 0;
  for (let i = 0; i < rangeLength; i++) {
    args.push(providedArgs[providedIndex++]);
  }
  for (let i = 0; i < partialArgs.length; i++) {
    const arg = partialArgs[i];
    if (arg === curryRight.placeholder) {
      if (providedIndex < providedArgs.length) {
        args.push(providedArgs[providedIndex++]);
      } else {
        args.push(arg);
      }
    } else {
      args.push(arg);
    }
  }
  return args;
}
var curryRightPlaceholder = Symbol("curryRight.placeholder");
curryRight.placeholder = curryRightPlaceholder;

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/debounce.mjs
function debounce2(func, debounceMs = 0, options = {}) {
  if (typeof options !== "object") {
    options = {};
  }
  const { signal, leading = false, trailing = true, maxWait } = options;
  const edges = Array(2);
  if (leading) {
    edges[0] = "leading";
  }
  if (trailing) {
    edges[1] = "trailing";
  }
  let result = void 0;
  let pendingAt = null;
  const _debounced = debounce(function(...args) {
    result = func.apply(this, args);
    pendingAt = null;
  }, debounceMs, { signal, edges });
  const debounced = function(...args) {
    if (maxWait != null) {
      if (pendingAt === null) {
        pendingAt = Date.now();
      } else {
        if (Date.now() - pendingAt >= maxWait) {
          result = func.apply(this, args);
          pendingAt = Date.now();
          _debounced.cancel();
          _debounced.schedule();
          return result;
        }
      }
    }
    _debounced.apply(this, args);
    return result;
  };
  const flush = () => {
    _debounced.flush();
    return result;
  };
  debounced.cancel = _debounced.cancel;
  debounced.flush = flush;
  return debounced;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/defer.mjs
function defer(func, ...args) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  return setTimeout(func, 1, ...args);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/flip.mjs
function flip(func) {
  return function(...args) {
    return func.apply(this, args.reverse());
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/flow.mjs
function flow2(...funcs) {
  const flattenFuncs = flatten(funcs, 1);
  if (flattenFuncs.some((func) => typeof func !== "function")) {
    throw new TypeError("Expected a function");
  }
  return flow(...flattenFuncs);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/flowRight.mjs
function flowRight2(...funcs) {
  const flattenFuncs = flatten(funcs, 1);
  if (flattenFuncs.some((func) => typeof func !== "function")) {
    throw new TypeError("Expected a function");
  }
  return flowRight(...flattenFuncs);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/rearg.mjs
function rearg(func, ...indices) {
  const flattenIndices = flatten2(indices);
  return function(...args) {
    const reorderedArgs = flattenIndices.map((i) => args[i]).slice(0, args.length);
    for (let i = reorderedArgs.length; i < args.length; i++) {
      reorderedArgs.push(args[i]);
    }
    return func.apply(this, reorderedArgs);
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/rest.mjs
function rest2(func, start = func.length - 1) {
  start = Number.parseInt(start, 10);
  if (Number.isNaN(start) || start < 0) {
    start = func.length - 1;
  }
  return rest(func, start);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/spread.mjs
function spread(func, argsIndex = 0) {
  argsIndex = Number.parseInt(argsIndex, 10);
  if (Number.isNaN(argsIndex) || argsIndex < 0) {
    argsIndex = 0;
  }
  return function(...args) {
    const array = args[argsIndex];
    const params = args.slice(0, argsIndex);
    if (array) {
      params.push(...array);
    }
    return func.apply(this, params);
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/function/throttle.mjs
function throttle(func, throttleMs = 0, options = {}) {
  if (typeof options !== "object") {
    options = {};
  }
  const { leading = true, trailing = true, signal } = options;
  return debounce2(func, throttleMs, { leading, trailing, signal, maxWait: throttleMs });
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/decimalAdjust.mjs
function decimalAdjust(type, number, precision = 0) {
  number = Number(number);
  if (Object.is(number, -0)) {
    number = "-0";
  }
  precision = Math.min(Number.parseInt(precision, 10), 292);
  if (precision) {
    const [magnitude, exponent = 0] = number.toString().split("e");
    let adjustedValue = Math[type](Number(`${magnitude}e${Number(exponent) + precision}`));
    if (Object.is(adjustedValue, -0)) {
      adjustedValue = "-0";
    }
    const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
    return Number(`${newMagnitude}e${Number(newExponent) - precision}`);
  }
  return Math[type](Number(number));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/ceil.mjs
function ceil(number, precision = 0) {
  return decimalAdjust("ceil", number, precision);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/clamp.mjs
function clamp2(value, bound1, bound2) {
  if (Number.isNaN(bound1)) {
    bound1 = 0;
  }
  if (Number.isNaN(bound2)) {
    bound2 = 0;
  }
  return clamp(value, bound1, bound2);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/floor.mjs
function floor(number, precision = 0) {
  return decimalAdjust("floor", number, precision);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/inRange.mjs
function inRange2(value, minimum, maximum) {
  if (!minimum) {
    minimum = 0;
  }
  if (maximum != null && !maximum) {
    maximum = 0;
  }
  if (minimum != null && typeof minimum !== "number") {
    minimum = Number(minimum);
  }
  if (maximum == null && minimum === 0) {
    return false;
  }
  if (maximum != null && typeof maximum !== "number") {
    maximum = Number(maximum);
  }
  if (maximum != null && minimum > maximum) {
    [minimum, maximum] = [maximum, minimum];
  }
  if (minimum === maximum) {
    return false;
  }
  return inRange(value, minimum, maximum);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/max.mjs
function max(items = []) {
  let maxElement = items[0];
  let max2 = void 0;
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (max2 == null || element > max2) {
      max2 = element;
      maxElement = element;
    }
  }
  return maxElement;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/min.mjs
function min(items = []) {
  let minElement = items[0];
  let min2 = void 0;
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (min2 == null || element < min2) {
      min2 = element;
      minElement = element;
    }
  }
  return minElement;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/parseInt.mjs
function parseInt(string, radix = 0, guard) {
  if (guard) {
    radix = 0;
  }
  return Number.parseInt(string, radix);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/random.mjs
function random2(...args) {
  let minimum = 0;
  let maximum = 1;
  let floating = false;
  switch (args.length) {
    case 1: {
      if (typeof args[0] === "boolean") {
        floating = args[0];
      } else {
        maximum = args[0];
      }
      break;
    }
    case 2: {
      if (typeof args[1] === "boolean") {
        maximum = args[0];
        floating = args[1];
      } else {
        minimum = args[0];
        maximum = args[1];
      }
    }
    case 3: {
      if (typeof args[2] === "object" && args[2] != null && args[2][args[1]] === args[0]) {
        minimum = 0;
        maximum = args[0];
        floating = false;
      } else {
        minimum = args[0];
        maximum = args[1];
        floating = args[2];
      }
    }
  }
  if (typeof minimum !== "number") {
    minimum = Number(minimum);
  }
  if (typeof maximum !== "number") {
    minimum = Number(maximum);
  }
  if (!minimum) {
    minimum = 0;
  }
  if (!maximum) {
    maximum = 0;
  }
  if (minimum > maximum) {
    [minimum, maximum] = [maximum, minimum];
  }
  minimum = clamp2(minimum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  maximum = clamp2(maximum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  if (minimum === maximum) {
    return minimum;
  }
  if (floating) {
    return random(minimum, maximum + 1);
  } else {
    return randomInt(minimum, maximum + 1);
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/round.mjs
function round(number, precision = 0) {
  return decimalAdjust("round", number, precision);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/sumBy.mjs
function sumBy(array, iteratee$1) {
  if (!array || !array.length) {
    return 0;
  }
  if (iteratee$1 != null) {
    iteratee$1 = iteratee(iteratee$1);
  }
  let result = iteratee$1 ? iteratee$1(array[0]) : array[0];
  for (let i = 1; i < array.length; i++) {
    const current = iteratee$1 ? iteratee$1(array[i]) : array[i];
    if (current !== void 0) {
      result += current;
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/math/sum.mjs
function sum(array) {
  return sumBy(array);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/defaults.mjs
function defaults(object, ...sources) {
  object = Object(object);
  const objectProto = Object.prototype;
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    const keys = Object.keys(source);
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const value = object[key];
      if (value === void 0 || !Object.hasOwn(object, key) && eq(value, objectProto[key])) {
        object[key] = source[key];
      }
    }
  }
  return object;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/fromPairs.mjs
function fromPairs(pairs) {
  if (!isArrayLike(pairs) && !(pairs instanceof Map)) {
    return {};
  }
  const result = {};
  for (const [key, value] of pairs) {
    result[key] = value;
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/invertBy.mjs
function invertBy(object, iteratee2) {
  const result = {};
  if (isNil(object)) {
    return result;
  }
  if (iteratee2 == null) {
    iteratee2 = identity;
  }
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = object[key];
    const valueStr = iteratee2(value);
    if (Array.isArray(result[valueStr])) {
      result[valueStr].push(key);
    } else {
      result[valueStr] = [key];
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/mapKeys.mjs
function mapKeys2(object, getNewKey) {
  getNewKey = getNewKey ?? identity;
  switch (typeof getNewKey) {
    case "string":
    case "symbol":
    case "number":
    case "object": {
      return mapKeys(object, property(getNewKey));
    }
    case "function": {
      return mapKeys(object, getNewKey);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/mapValues.mjs
function mapValues2(object, getNewValue) {
  getNewValue = getNewValue ?? identity;
  switch (typeof getNewValue) {
    case "string":
    case "symbol":
    case "number":
    case "object": {
      return mapValues(object, property(getNewValue));
    }
    case "function": {
      return mapValues(object, getNewValue);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isPlainObject.mjs
function isPlainObject(object) {
  var _a;
  if (typeof object !== "object") {
    return false;
  }
  if (object == null) {
    return false;
  }
  if (Object.getPrototypeOf(object) === null) {
    return true;
  }
  if (Object.prototype.toString.call(object) !== "[object Object]") {
    const tag = object[Symbol.toStringTag];
    if (tag == null) {
      return false;
    }
    const isTagReadonly = !((_a = Object.getOwnPropertyDescriptor(object, Symbol.toStringTag)) == null ? void 0 : _a.writable);
    if (isTagReadonly) {
      return false;
    }
    return object.toString() === `[object ${tag}]`;
  }
  let proto = object;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(object) === proto;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isTypedArray.mjs
function isTypedArray2(x) {
  return isTypedArray(x);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/mergeWith.mjs
function mergeWith(object, ...otherArgs) {
  const sources = otherArgs.slice(0, -1);
  const merge2 = otherArgs[otherArgs.length - 1];
  let result = object;
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    result = mergeWithDeep(object, source, merge2, /* @__PURE__ */ new Map());
  }
  return result;
}
function mergeWithDeep(target, source, merge2, stack) {
  if (source == null || typeof source !== "object") {
    return target;
  }
  if (stack.has(source)) {
    return clone(stack.get(source));
  }
  stack.set(source, target);
  if (Array.isArray(source)) {
    source = source.slice();
    for (let i = 0; i < source.length; i++) {
      source[i] = source[i] ?? void 0;
    }
  }
  const sourceKeys = [...Object.keys(source), ...getSymbols(source)];
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
    let sourceValue = source[key];
    let targetValue = target[key];
    if (isArguments(sourceValue)) {
      sourceValue = { ...sourceValue };
    }
    if (isArguments(targetValue)) {
      targetValue = { ...targetValue };
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer(sourceValue)) {
      sourceValue = cloneDeep2(sourceValue);
    }
    if (Array.isArray(sourceValue)) {
      if (typeof targetValue === "object") {
        const cloned = [];
        const targetKeys = Reflect.ownKeys(targetValue);
        for (let i2 = 0; i2 < targetKeys.length; i2++) {
          const targetKey = targetKeys[i2];
          cloned[targetKey] = targetValue[targetKey];
        }
        targetValue = cloned;
      } else {
        targetValue = [];
      }
    }
    const merged = merge2(targetValue, sourceValue, key, target, source, stack);
    if (merged != null) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      target[key] = mergeWithDeep(targetValue, sourceValue, merge2, stack);
    } else if (isObjectLike(targetValue) && isObjectLike(sourceValue)) {
      target[key] = mergeWithDeep(targetValue, sourceValue, merge2, stack);
    } else if (targetValue == null && isPlainObject(sourceValue)) {
      target[key] = mergeWithDeep({}, sourceValue, merge2, stack);
    } else if (targetValue == null && isTypedArray2(sourceValue)) {
      target[key] = cloneDeep2(sourceValue);
    } else if (targetValue === void 0 || sourceValue !== void 0) {
      target[key] = sourceValue;
    }
  }
  return target;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/merge.mjs
function merge(object, ...sources) {
  return mergeWith(object, ...sources, noop);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/unset.mjs
function unset(obj, path) {
  if (obj == null) {
    return true;
  }
  switch (typeof path) {
    case "symbol":
    case "number":
    case "object": {
      if (Array.isArray(path)) {
        return unsetWithPath(obj, path);
      }
      if (typeof path === "number") {
        path = toKey(path);
      } else if (typeof path === "object") {
        if (Object.is(path == null ? void 0 : path.valueOf(), -0)) {
          path = "-0";
        } else {
          path = String(path);
        }
      }
      if ((obj == null ? void 0 : obj[path]) === void 0) {
        return true;
      }
      try {
        delete obj[path];
        return true;
      } catch {
        return false;
      }
    }
    case "string": {
      if ((obj == null ? void 0 : obj[path]) === void 0 && isDeepKey(path)) {
        return unsetWithPath(obj, toPath(path));
      }
      try {
        delete obj[path];
        return true;
      } catch {
        return false;
      }
    }
  }
}
function unsetWithPath(obj, path) {
  const parent = get(obj, path.slice(0, -1), obj);
  const lastKey = path[path.length - 1];
  if ((parent == null ? void 0 : parent[lastKey]) === void 0) {
    return true;
  }
  try {
    delete parent[lastKey];
    return true;
  } catch {
    return false;
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/omit.mjs
function omit(obj, ...keysArr) {
  if (obj == null) {
    return {};
  }
  const result = cloneDeep(obj);
  for (let i = 0; i < keysArr.length; i++) {
    let keys = keysArr[i];
    switch (typeof keys) {
      case "object": {
        if (!Array.isArray(keys)) {
          keys = Array.from(keys);
        }
        for (let j = 0; j < keys.length; j++) {
          const key = keys[j];
          unset(result, key);
        }
        break;
      }
      case "string":
      case "symbol":
      case "number": {
        unset(result, keys);
        break;
      }
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isNil.mjs
function isNil2(x) {
  return x == null;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/pick.mjs
function pick(obj, ...keysArr) {
  if (isNil2(obj)) {
    return {};
  }
  const result = {};
  for (let i = 0; i < keysArr.length; i++) {
    let keys = keysArr[i];
    switch (typeof keys) {
      case "object": {
        if (!Array.isArray(keys)) {
          keys = Array.from(keys);
        }
        break;
      }
      case "string":
      case "symbol":
      case "number": {
        keys = [keys];
        break;
      }
    }
    for (const key of keys) {
      const value = get(obj, key);
      if (value === void 0 && !has(obj, key)) {
        continue;
      }
      if (typeof key === "string" && Object.hasOwn(obj, key)) {
        result[key] = value;
      } else {
        set(result, key, value);
      }
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/object/toDefaulted.mjs
function toDefaulted(object, ...sources) {
  const cloned = cloneDeep2(object);
  return defaults(cloned, ...sources);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/conformsTo.mjs
function conformsTo(target, source) {
  if (source == null) {
    return true;
  }
  if (target == null) {
    return Object.keys(source).length === 0;
  }
  const keys = Object.keys(source);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const predicate = source[key];
    const value = target[key];
    if (value === void 0 && !(key in target) || !predicate(value)) {
      return false;
    }
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/conforms.mjs
function conforms(source) {
  source = cloneDeep(source);
  return function(object) {
    return conformsTo(object, source);
  };
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isArrayBuffer.mjs
function isArrayBuffer2(value) {
  return isArrayBuffer(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isBoolean.mjs
function isBoolean(value) {
  return typeof value === "boolean" || value instanceof Boolean;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isDate.mjs
function isDate2(value) {
  return isDate(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/isPrototype.mjs
function isPrototype(value) {
  const constructor = value.constructor;
  const prototype = typeof constructor === "function" ? constructor.prototype : Object.prototype;
  return value === prototype;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isEmpty.mjs
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value)) {
    if (typeof value.splice !== "function" && typeof value !== "string" && (typeof Buffer === "undefined" || !Buffer.isBuffer(value)) && !isTypedArray2(value) && !isArguments(value)) {
      return false;
    }
    return value.length === 0;
  }
  if (typeof value === "object") {
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }
    const keys = Object.keys(value);
    if (isPrototype(value)) {
      return keys.filter((x) => x !== "constructor").length === 0;
    }
    return keys.length === 0;
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isEqualWith.mjs
function isEqualWith2(a, b, areValuesEqual = noop) {
  if (typeof areValuesEqual !== "function") {
    areValuesEqual = noop;
  }
  return isEqualWith(a, b, (...args) => {
    const result = areValuesEqual(...args);
    if (result !== void 0) {
      return Boolean(result);
    }
    if (a instanceof Map && b instanceof Map) {
      return isEqualWith2(Array.from(a), Array.from(b), after(2, areValuesEqual));
    }
    if (a instanceof Set && b instanceof Set) {
      return isEqualWith2(Array.from(a), Array.from(b), after(2, areValuesEqual));
    }
  });
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isError.mjs
function isError(value) {
  return getTag(value) === "[object Error]";
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isFinite.mjs
function isFinite(value) {
  return Number.isFinite(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isInteger.mjs
function isInteger(value) {
  return Number.isInteger(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isMap.mjs
function isMap2(value) {
  return isMap(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isNaN.mjs
function isNaN(value) {
  return Number.isNaN(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isNumber.mjs
function isNumber(value) {
  return typeof value === "number" || value instanceof Number;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isRegExp.mjs
function isRegExp2(value) {
  return isRegExp(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isSafeInteger.mjs
function isSafeInteger(value) {
  return Number.isSafeInteger(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isSet.mjs
function isSet2(value) {
  return isSet(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isWeakMap.mjs
function isWeakMap2(value) {
  return isWeakMap(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/predicate/isWeakSet.mjs
function isWeakSet2(value) {
  return isWeakSet(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/toString.mjs
function toString(value) {
  if (value == null) {
    return "";
  }
  if (Array.isArray(value)) {
    return value.map(toString).join(",");
  }
  const result = String(value);
  if (result === "0" && Object.is(Number(value), -0)) {
    return "-0";
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/normalizeForCase.mjs
function normalizeForCase(str) {
  if (typeof str !== "string") {
    str = toString(str);
  }
  return str.replace(/['\u2019]/g, "");
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/camelCase.mjs
function camelCase2(str) {
  return camelCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/endsWith.mjs
function endsWith(str, target, position = str.length) {
  return str.endsWith(target, position);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/escape.mjs
function escape2(string) {
  return escape(toString(string));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/kebabCase.mjs
function kebabCase2(str) {
  return kebabCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/lowerCase.mjs
function lowerCase2(str) {
  return lowerCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/pad.mjs
function pad2(str, length, chars = " ") {
  return pad(toString(str), length, chars);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/padEnd.mjs
function padEnd(str, length = 0, chars = " ") {
  return toString(str).padEnd(length, chars);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/padStart.mjs
function padStart(str, length = 0, chars = " ") {
  return toString(str).padStart(length, chars);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/repeat.mjs
function repeat(str, n) {
  return str.repeat(n);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/replace.mjs
function replace(target = "", pattern, replacement) {
  if (arguments.length < 3) {
    return toString(target);
  }
  return toString(target).replace(pattern, replacement);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/snakeCase.mjs
function snakeCase2(str) {
  return snakeCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/startCase.mjs
function startCase(str) {
  const words$1 = words(normalizeForCase(str).trim());
  let result = "";
  for (let i = 0; i < words$1.length; i++) {
    const word = words$1[i];
    if (result) {
      result += " ";
    }
    if (word === word.toUpperCase()) {
      result += word;
    } else {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/startsWith.mjs
function startsWith(str, target, position = 0) {
  return str.startsWith(target, position);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/template.mjs
var esTemplateRegExp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var unEscapedRegExp = /['\n\r\u2028\u2029\\]/g;
var noMatchExp = /($^)/;
var escapeMap = /* @__PURE__ */ new Map([
  ["\\", "\\"],
  ["'", "'"],
  ["\n", "n"],
  ["\r", "r"],
  ["\u2028", "u2028"],
  ["\u2029", "u2029"]
]);
function escapeString(match) {
  return `\\${escapeMap.get(match)}`;
}
var templateSettings = {
  escape: /<%-([\s\S]+?)%>/g,
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  variable: "",
  imports: {
    _: {
      escape: escape2,
      template
    }
  }
};
function template(string, options, guard) {
  var _a, _b, _c;
  string = toString(string);
  if (guard) {
    options = templateSettings;
  }
  options = defaults({ ...options }, templateSettings);
  const delimitersRegExp = new RegExp([
    ((_a = options.escape) == null ? void 0 : _a.source) ?? noMatchExp.source,
    ((_b = options.interpolate) == null ? void 0 : _b.source) ?? noMatchExp.source,
    options.interpolate ? esTemplateRegExp.source : noMatchExp.source,
    ((_c = options.evaluate) == null ? void 0 : _c.source) ?? noMatchExp.source,
    "$"
  ].join("|"), "g");
  let lastIndex = 0;
  let isEvaluated = false;
  let source = `__p += ''`;
  for (const match of string.matchAll(delimitersRegExp)) {
    const [fullMatch, escapeValue, interpolateValue, esTemplateValue, evaluateValue] = match;
    const { index } = match;
    source += ` + '${string.slice(lastIndex, index).replace(unEscapedRegExp, escapeString)}'`;
    if (escapeValue) {
      source += ` + _.escape(${escapeValue})`;
    }
    if (interpolateValue) {
      source += ` + ((${interpolateValue}) == null ? '' : ${interpolateValue})`;
    } else if (esTemplateValue) {
      source += ` + ((${esTemplateValue}) == null ? '' : ${esTemplateValue})`;
    }
    if (evaluateValue) {
      source += `;
${evaluateValue};
 __p += ''`;
      isEvaluated = true;
    }
    lastIndex = index + fullMatch.length;
  }
  const imports = defaults({ ...options.imports }, templateSettings.imports);
  const importsKeys = Object.keys(imports);
  const importValues = Object.values(imports);
  const sourceURL = `//# sourceURL=${options.sourceURL ? String(options.sourceURL).replace(/[\r\n]/g, " ") : `es-toolkit.templateSource[${Date.now()}]`}
`;
  const compiledFunction = `function(${options.variable || "obj"}) {
    let __p = '';
    ${options.variable ? "" : "if (obj == null) { obj = {}; }"}
    ${isEvaluated ? `function print() { __p += Array.prototype.join.call(arguments, ''); }` : ""}
    ${options.variable ? source : `with(obj) {
${source}
}`}
    return __p;
  }`;
  const result = attempt(() => new Function(...importsKeys, `${sourceURL}return ${compiledFunction}`)(...importValues));
  result.source = compiledFunction;
  if (result instanceof Error) {
    throw result;
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/trim.mjs
function trim2(str, chars, guard) {
  if (str == null) {
    return "";
  }
  if (guard != null || chars == null) {
    return str.toString().trim();
  }
  switch (typeof chars) {
    case "string": {
      return trim(str, chars.toString().split(""));
    }
    case "object": {
      if (Array.isArray(chars)) {
        return trim(str, chars.map((x) => x.toString()));
      } else {
        return trim(str, chars.toString().split(""));
      }
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/trimEnd.mjs
function trimEnd2(str, chars, guard) {
  if (str == null) {
    return "";
  }
  if (guard != null || chars == null) {
    return str.toString().trimEnd();
  }
  switch (typeof chars) {
    case "string": {
      return trimEnd(str, chars.toString().split(""));
    }
    case "object": {
      if (Array.isArray(chars)) {
        return trimEnd(str, chars.map((x) => x.toString()));
      } else {
        return trimEnd(str, chars.toString().split(""));
      }
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/trimStart.mjs
function trimStart2(str, chars, guard) {
  if (str == null) {
    return "";
  }
  if (guard != null || chars == null) {
    return str.toString().trimStart();
  }
  switch (typeof chars) {
    case "string": {
      return trimStart(str, chars.toString().split(""));
    }
    case "object": {
      if (Array.isArray(chars)) {
        return trimStart(str, chars.map((x) => x.toString()));
      } else {
        return trimStart(str, chars.toString().split(""));
      }
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/string/upperCase.mjs
function upperCase2(str) {
  return upperCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/constant.mjs
function constant(value) {
  return () => value;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/defaultTo.mjs
function defaultTo(value, defaultValue) {
  if (value == null || Number.isNaN(value)) {
    return defaultValue;
  }
  return value;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/times.mjs
function times(n, getValue) {
  n = toInteger(n);
  if (n < 1 || !Number.isSafeInteger(n)) {
    return [];
  }
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = typeof getValue === "function" ? getValue(i) : i;
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/MAX_ARRAY_LENGTH.mjs
var MAX_ARRAY_LENGTH = 4294967295;

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/toLength.mjs
function toLength(value) {
  if (value == null) {
    return 0;
  }
  const length = Math.floor(Number(value));
  return clamp2(length, 0, MAX_ARRAY_LENGTH);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/MAX_SAFE_INTEGER.mjs
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/toSafeInteger.mjs
function toSafeInteger(value) {
  if (value == null) {
    return 0;
  }
  return clamp2(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/uniqueId.mjs
var idCounter = 0;
function uniqueId(prefix = "") {
  const id = ++idCounter;
  return `${prefix}${id}`;
}
export {
  AbortError,
  TimeoutError,
  after,
  ary2 as ary,
  at,
  attempt,
  before,
  bind,
  bindKey,
  camelCase2 as camelCase,
  capitalize,
  castArray,
  ceil,
  chunk2 as chunk,
  clamp2 as clamp,
  clone,
  cloneDeep2 as cloneDeep,
  compact2 as compact,
  concat,
  conforms,
  conformsTo,
  constant,
  constantCase,
  countBy,
  curry,
  curryRight,
  debounce2 as debounce,
  deburr,
  defaultTo,
  defaults,
  defer,
  delay,
  difference2 as difference,
  differenceBy2 as differenceBy,
  differenceWith,
  drop2 as drop,
  dropRight2 as dropRight,
  dropRightWhile2 as dropRightWhile,
  dropWhile2 as dropWhile,
  forEach as each,
  endsWith,
  eq,
  escape2 as escape,
  escapeRegExp,
  every,
  fill2 as fill,
  filter,
  find,
  findIndex,
  findKey,
  findLastIndex,
  head2 as first,
  flatMap,
  flatMapDeep,
  flatten2 as flatten,
  flattenDeep,
  flattenDepth,
  flattenObject,
  flip,
  floor,
  flow2 as flow,
  flowRight2 as flowRight,
  forEach,
  forEachRight,
  fromPairs,
  get,
  groupBy,
  has,
  head2 as head,
  identity,
  inRange2 as inRange,
  includes,
  indexOf,
  initial,
  intersection2 as intersection,
  intersectionBy2 as intersectionBy,
  intersectionWith,
  invariant,
  invert,
  invertBy,
  isArguments,
  isArray,
  isArrayBuffer2 as isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBlob,
  isBoolean,
  isDate2 as isDate,
  isEmpty,
  isEqual,
  isEqualWith2 as isEqualWith,
  isError,
  isFile,
  isFinite,
  isFunction,
  isInteger,
  isJSONArray,
  isJSONObject,
  isJSONValue,
  isLength,
  isMap2 as isMap,
  isMatch,
  isNaN,
  isNil2 as isNil,
  isNotNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isPrimitive,
  isRegExp2 as isRegExp,
  isSafeInteger,
  isSet2 as isSet,
  isString,
  isSubset,
  isSubsetWith,
  isSymbol,
  isTypedArray2 as isTypedArray,
  isUndefined,
  isWeakMap2 as isWeakMap,
  isWeakSet2 as isWeakSet,
  iteratee,
  join,
  kebabCase2 as kebabCase,
  keyBy,
  last2 as last,
  lowerCase2 as lowerCase,
  lowerFirst,
  mapKeys2 as mapKeys,
  mapValues2 as mapValues,
  matches,
  matchesProperty,
  max,
  maxBy,
  mean,
  meanBy,
  median,
  medianBy,
  memoize,
  merge,
  mergeWith,
  min,
  minBy,
  negate,
  noop,
  omit,
  omitBy,
  once,
  orderBy,
  pad2 as pad,
  padEnd,
  padStart,
  parseInt,
  partial,
  partialRight,
  partition,
  pascalCase,
  pick,
  pickBy,
  property,
  pullAt,
  random2 as random,
  randomInt,
  range,
  rangeRight,
  rearg,
  repeat,
  replace,
  rest2 as rest,
  round,
  sample2 as sample,
  sampleSize,
  set,
  shuffle,
  size,
  slice,
  snakeCase2 as snakeCase,
  some,
  sortBy,
  spread,
  startCase,
  startsWith,
  sum,
  sumBy,
  tail2 as tail,
  take2 as take,
  takeRight2 as takeRight,
  takeRightWhile,
  takeWhile,
  template,
  templateSettings,
  throttle,
  timeout,
  times,
  toDefaulted,
  toFilled,
  toFinite,
  toInteger,
  toLength,
  toMerged,
  toNumber,
  toPath,
  toSafeInteger,
  toString,
  trim2 as trim,
  trimEnd2 as trimEnd,
  trimStart2 as trimStart,
  unary,
  unescape,
  union,
  unionBy,
  unionWith,
  uniq2 as uniq,
  uniqBy2 as uniqBy,
  uniqWith,
  uniqueId,
  unset,
  unzip2 as unzip,
  unzipWith,
  upperCase2 as upperCase,
  upperFirst,
  withTimeout,
  without2 as without,
  words,
  xor,
  xorBy,
  xorWith,
  zip2 as zip,
  zipObject,
  zipObjectDeep,
  zipWith
};
//# sourceMappingURL=es-toolkit_compat.js.map
