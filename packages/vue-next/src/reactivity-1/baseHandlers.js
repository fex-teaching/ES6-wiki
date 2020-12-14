function createGetter() {
  return function get(target, key, receiver) {
    console.log('获取值');
    const res = Reflect.get(target, key, receiver);
    return res;
  }
}

function createSetter() {
  return function get(target, key, value, receiver) {
    console.log('设置值');
    const res = Reflect.set(target, key, value, receiver);
    return res;
  }
}

function deleteProperty(target, key) {
  const res = Reflect.deleteProperty(target, key, receiver);
  return res;
}

const get = createGetter()
const set = createSetter()

export const mutableHandlers = {
  get,
  set,
  deleteProperty,
  // has,
  // ownKeys
}

