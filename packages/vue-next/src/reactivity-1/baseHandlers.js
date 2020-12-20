import { hasChanged, hasOwn, isArray, isIntegerKey, isObject, isSymbol } from '../shared/index';
import { reactive } from './reactive';


function createGetter() {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key)) {
      return res;
    }
    console.log("获取值，调用get方法"); // 拦截get方法
    if (isObject(res)) {
      return reactive(res);
    }
    return res;
  };
}

function createSetter() {
  return function get(target, key, value, receiver) {
    const oldValue = target[key];
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);

    const result = Reflect.set(target, key, value, receiver);

    if (!hadKey) {
      console.log('新增属性');
    } else if (hasChanged(value, oldValue)) {
      console.log('修改属性');
    }

    return result;
  };
}

function deleteProperty(target, key) {
  const res = Reflect.deleteProperty(target, key, receiver);
  return res;
}

const get = createGetter();
const set = createSetter();

export const mutableHandlers = {
  get,
  set,
  deleteProperty,
  // has,
  // ownKeys
};
