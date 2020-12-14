import { mutableHandlers } from './baseHandlers';

export function reactive(target) {
  return createReactiveObject(target, true, mutableHandlers);
}


function createReactiveObject(target, baseHandlers) {
  if (!isObject(target)) {
    return target
  }
  const proxyMap = reactiveMap;
  const existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(target, baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}