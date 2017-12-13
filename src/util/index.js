/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }
  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })
  return copy
}

/**
 * forEach for object
 */
export function forEachValue (obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function isPromise (val) {
  return val && typeof val.then === 'function'
}

export function assert (condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}

/**
 * 判断非空
 * @param obj
 * @returns {boolean}
 */
export function isEmpty (obj) {
  if (obj == undefined || obj == null || new String(obj).trim() == '') {
    return true;
  } else {
    return false;
  }
}

/**
 * 获取字符串真实长度 汉字算两位
 * @param str
 * @returns {number}
 */
export function getLocalLen(str) {
  return isEmpty(str) ? 0 : str.replace(/[^\x00-\xff]/g, "**").length;
}

export function substrLen(str, len, fix) {
  return (typeof str === 'string' && getLocalLen(str) > len) ? (str.substring(0, len) + (fix !== undefined ? fix : '...')) : str;
}

let class2type = {}, toString = Object.prototype.toString;
(function () {
  var typeArr = "Boolean,Number,String,Function,Array,Date,RegExp,Object".split(",");
  for (var i = 0; i < typeArr.length; i++) {
    var name = typeArr[i];
    class2type["[object " + name + "]"] = name.toLowerCase();
  }
})()
/**
 * 判断参数类型
 * @param obj
 * @returns {string}
 */
export function type (obj) {
  return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
}
/**
 * 判断参数是否为布尔类型
 * @param obj
 * @returns {boolean}
 */
export function isBoolean (obj) {
  return isEmpty(obj) ? false : type(obj) === 'boolean';
}
/**
 * 判断参数是否为数字类型
 * @param obj
 * @returns {boolean}
 */
export function isNumeric (obj) {
  return isEmpty(obj) ? false : type(obj) === 'number';
}
export function isString (obj) {
  return isEmpty(obj) ? false : type(obj) === 'string';
}
export function isFunction (obj) {
  return isEmpty(obj) ? false : type(obj) === 'function';
}
export function isArray (obj) {
  return isEmpty(obj) ? false : type(obj) === 'array';
}
export function isDate (obj) {
  return isEmpty(obj) ? false : type(obj) === 'date';
}
export function isRegExp (obj) {
  return isEmpty(obj) ? false : type(obj) === 'regexp';
}
export function isObject (obj) {
  return isEmpty(obj) ? false : type(obj) === 'object';
}
