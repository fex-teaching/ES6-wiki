function reactive(target) {
  return createReactiveObject(target);
}

function createReactiveObject(target) {
  const handlers = {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return res;
    },
    set(target, key, value, receiver) {
      console.log('设置值')
      const result = Reflect.set(target, key, value, receiver);
      return result;
    },
    deleteProperty(target, key) {
      console.log('删除值')
      const result = Reflect.defineProperty(target, key);
      return result;
    },
  }

  const observed = new Proxy(target, handlers);

  return observed;
}

const proxy = reactive({a: 1, b: 2});
proxy.a;
proxy.a = 100;
console.log(proxy.a)
delete proxy.a;
console.log(proxy.a)

// const proxy = reactive([1,2]);
// proxy.push(3)
// console.log(proxy)