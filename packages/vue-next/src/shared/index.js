export const isObject = val => val !== null && typeof val === 'object'
export const isSymbol = val => typeof val === 'symbol'
export const isArray = Array.isArray;
// 判断key是不是整型
export const isIntegerKey = key => '' + parseInt(key, 10) === key;

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val, key) => hasOwnProperty.call(val, key);

export const hasChanged = (value, oldValue) => value !== oldValue;
