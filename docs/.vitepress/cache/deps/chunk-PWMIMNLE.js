// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/function/noop.mjs
function noop() {
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function isPrimitive(value) {
  return value == null || typeof value !== "object" && typeof value !== "function";
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function isTypedArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function isPlainObject(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  const hasObjectPrototype = proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null;
  if (!hasObjectPrototype) {
    return false;
  }
  return Object.prototype.toString.call(value) === "[object Object]";
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isBlob.mjs
function isBlob(x) {
  if (typeof Blob === "undefined") {
    return false;
  }
  return x instanceof Blob;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/util/eq.mjs
function eq(value, other) {
  return value === other || Number.isNaN(value) && Number.isNaN(other);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function getSymbols(object) {
  return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var regexpTag = "[object RegExp]";
var stringTag = "[object String]";
var numberTag = "[object Number]";
var booleanTag = "[object Boolean]";
var argumentsTag = "[object Arguments]";
var symbolTag = "[object Symbol]";
var dateTag = "[object Date]";
var mapTag = "[object Map]";
var setTag = "[object Set]";
var arrayTag = "[object Array]";
var functionTag = "[object Function]";
var arrayBufferTag = "[object ArrayBuffer]";
var objectTag = "[object Object]";
var errorTag = "[object Error]";
var dataViewTag = "[object DataView]";
var uint8ArrayTag = "[object Uint8Array]";
var uint8ClampedArrayTag = "[object Uint8ClampedArray]";
var uint16ArrayTag = "[object Uint16Array]";
var uint32ArrayTag = "[object Uint32Array]";
var bigUint64ArrayTag = "[object BigUint64Array]";
var int8ArrayTag = "[object Int8Array]";
var int16ArrayTag = "[object Int16Array]";
var int32ArrayTag = "[object Int32Array]";
var bigInt64ArrayTag = "[object BigInt64Array]";
var float32ArrayTag = "[object Float32Array]";
var float64ArrayTag = "[object Float64Array]";

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
function isEqualWith(a, b, areValuesEqual) {
  return isEqualWithImpl(a, b, void 0, void 0, void 0, void 0, areValuesEqual);
}
function isEqualWithImpl(a, b, property, aParent, bParent, stack, areValuesEqual) {
  const result = areValuesEqual(a, b, property, aParent, bParent, stack);
  if (result !== void 0) {
    return result;
  }
  if (typeof a === typeof b) {
    switch (typeof a) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined": {
        return a === b;
      }
      case "number": {
        return a === b || Object.is(a, b);
      }
      case "function": {
        return a === b;
      }
      case "object": {
        return areObjectsEqual(a, b, stack, areValuesEqual);
      }
    }
  }
  return areObjectsEqual(a, b, stack, areValuesEqual);
}
function areObjectsEqual(a, b, stack, areValuesEqual) {
  if (Object.is(a, b)) {
    return true;
  }
  let aTag = getTag(a);
  let bTag = getTag(b);
  if (aTag === argumentsTag) {
    aTag = objectTag;
  }
  if (bTag === argumentsTag) {
    bTag = objectTag;
  }
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case stringTag:
      return a.toString() === b.toString();
    case numberTag: {
      const x = a.valueOf();
      const y = b.valueOf();
      return eq(x, y);
    }
    case booleanTag:
    case dateTag:
    case symbolTag:
      return Object.is(a.valueOf(), b.valueOf());
    case regexpTag: {
      return a.source === b.source && a.flags === b.flags;
    }
    case functionTag: {
      return a === b;
    }
  }
  stack = stack ?? /* @__PURE__ */ new Map();
  const aStack = stack.get(a);
  const bStack = stack.get(b);
  if (aStack != null && bStack != null) {
    return aStack === b;
  }
  stack.set(a, b);
  stack.set(b, a);
  try {
    switch (aTag) {
      case mapTag: {
        if (a.size !== b.size) {
          return false;
        }
        for (const [key, value] of a.entries()) {
          if (!b.has(key) || !isEqualWithImpl(value, b.get(key), key, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case setTag: {
        if (a.size !== b.size) {
          return false;
        }
        const aValues = Array.from(a.values());
        const bValues = Array.from(b.values());
        for (let i = 0; i < aValues.length; i++) {
          const aValue = aValues[i];
          const index = bValues.findIndex((bValue) => {
            return isEqualWithImpl(aValue, bValue, void 0, a, b, stack, areValuesEqual);
          });
          if (index === -1) {
            return false;
          }
          bValues.splice(index, 1);
        }
        return true;
      }
      case arrayTag:
      case uint8ArrayTag:
      case uint8ClampedArrayTag:
      case uint16ArrayTag:
      case uint32ArrayTag:
      case bigUint64ArrayTag:
      case int8ArrayTag:
      case int16ArrayTag:
      case int32ArrayTag:
      case bigInt64ArrayTag:
      case float32ArrayTag:
      case float64ArrayTag: {
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(a) !== Buffer.isBuffer(b)) {
          return false;
        }
        if (a.length !== b.length) {
          return false;
        }
        for (let i = 0; i < a.length; i++) {
          if (!isEqualWithImpl(a[i], b[i], i, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case arrayBufferTag: {
        if (a.byteLength !== b.byteLength) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
      }
      case dataViewTag: {
        if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
      }
      case errorTag: {
        return a.name === b.name && a.message === b.message;
      }
      case objectTag: {
        const areEqualInstances = areObjectsEqual(a.constructor, b.constructor, stack, areValuesEqual) || isPlainObject(a) && isPlainObject(b);
        if (!areEqualInstances) {
          return false;
        }
        const aKeys = [...Object.keys(a), ...getSymbols(a)];
        const bKeys = [...Object.keys(b), ...getSymbols(b)];
        if (aKeys.length !== bKeys.length) {
          return false;
        }
        for (let i = 0; i < aKeys.length; i++) {
          const propKey = aKeys[i];
          const aProp = a[propKey];
          if (!Object.hasOwn(b, propKey)) {
            return false;
          }
          const bProp = b[propKey];
          if (!isEqualWithImpl(aProp, bProp, propKey, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      default: {
        return false;
      }
    }
  } finally {
    stack.delete(a);
    stack.delete(b);
  }
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isEqual.mjs
function isEqual(a, b) {
  return isEqualWith(a, b, noop);
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isFile.mjs
function isFile(x) {
  if (typeof File === "undefined") {
    return false;
  }
  return isBlob(x) && x instanceof File;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isFunction.mjs
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isJSONValue.mjs
function isJSONValue(value) {
  switch (typeof value) {
    case "object": {
      return value === null || isJSONArray(value) || isJSONObject(value);
    }
    case "string":
    case "number":
    case "boolean": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function isJSONArray(value) {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every((item) => isJSONValue(item));
}
function isJSONObject(obj) {
  if (!isPlainObject(obj)) {
    return false;
  }
  const keys = Reflect.ownKeys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];
    if (typeof key !== "string") {
      return false;
    }
    if (!isJSONValue(value)) {
      return false;
    }
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isLength.mjs
function isLength(value) {
  return Number.isSafeInteger(value) && value >= 0;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isNotNil.mjs
function isNotNil(x) {
  return x != null;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isNull.mjs
function isNull(x) {
  return x === null;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isUndefined.mjs
function isUndefined(x) {
  return x === void 0;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isNil.mjs
function isNil(x) {
  return x == null;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isArrayBuffer.mjs
function isArrayBuffer(value) {
  return value instanceof ArrayBuffer;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isDate.mjs
function isDate(value) {
  return value instanceof Date;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isMap.mjs
function isMap(value) {
  return value instanceof Map;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isRegExp.mjs
function isRegExp(value) {
  return value instanceof RegExp;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isSet.mjs
function isSet(value) {
  return value instanceof Set;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isWeakMap.mjs
function isWeakMap(value) {
  return value instanceof WeakMap;
}

// node_modules/.pnpm/es-toolkit@1.27.0/node_modules/es-toolkit/dist/predicate/isWeakSet.mjs
function isWeakSet(value) {
  return value instanceof WeakSet;
}

export {
  noop,
  isPrimitive,
  isTypedArray,
  isPlainObject,
  getSymbols,
  isBlob,
  getTag,
  stringTag,
  numberTag,
  booleanTag,
  argumentsTag,
  eq,
  isEqualWith,
  isEqual,
  isFile,
  isFunction,
  isJSONValue,
  isJSONArray,
  isJSONObject,
  isLength,
  isNotNil,
  isNull,
  isUndefined,
  isNil,
  isArrayBuffer,
  isDate,
  isMap,
  isRegExp,
  isSet,
  isWeakMap,
  isWeakSet
};
//# sourceMappingURL=chunk-PWMIMNLE.js.map
