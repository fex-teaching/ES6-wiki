function reactive(target) {
  return createReactiveObject(target);
}

function createReactiveObject(target) {
  const handlers = {
    get(target, key, receiver) {
      console.log('获取值')
      return target[key];
    },
    set(target, key, value, receiver) {
      console.log('设置值')
      target[key] = value;
    },
    deleteProperty(target, key) {
      console.log('删除值')
      delete target[key]
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

