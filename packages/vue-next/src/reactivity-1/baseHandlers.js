import { reactive } from './reactive';

function createGetter() {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    if (typeof key == "symbol") {
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
    console.log("设置值");
    const res = Reflect.set(target, key, value, receiver);
    return res;
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
