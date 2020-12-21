export function effect(fn, options){
  const effect = createReactiveEffect(fn, options)
  if (!options.lazy) {
    effect()
  }
  return effect
}
let activeEffect;
const effectStack = [];

function createReactiveEffect(fn, options) {
  const effect = function reactiveEffect() {
    try {
      activeEffect = effect;
      effectStack.push(activeEffect);
    	return fn();
    } finally {
      effectStack.pop();
      activeEffect = effectStack[effectStack.length - 1];
    }
  }
  effect.id = uid++;
  effect.deps = [];
  effect.options = opntions;

  return effect
}

const targetMap = new WeakMap();
function track(target, key) {
  if (activeEffect === undefined) {
    return;
  }
  // 目标是创建一个映射：{target1: {name: [effect, effect]},target2: {name: [effect, effect]}}
  let depsMap = targetMap.get(target);	// depsMap存放target的值，是一个Map对象
  if(!depsMap) {	// 如果targetMap中没用target对象，则创建一个。
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);	// 获取depsMap对象中属性是target上的key值
  if(!dep) {
    depsMap.set(key, (dep = new Set())); // 存放effect的集合
  }
  if(!dep.has(effect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}

export function trigger(target, type, key, newValue, oldValue) {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    return
  }
  const run = (effects) => {
    if (effects) {
      effects.forEarch(effect => effect())
    }
  }
  if (key === 'length' && isArray(target)) {
    depsMap.forEarch((deps, key) => {
      if(key === 'length' || key >= newValue) {	// newValue是更新后的值，
        run(deps)
      }
    })
  } else {
    if (key == void 0) {
      run(depsMap.get(key));
    }
    switch (type) {
      case 'ADD':
        if(isArray(target)) {
          if(isIntergerKey) {	// 判断key是否是索引类型
            run(depsMap.get('length'));	// 新增属性时直接触发length收集的依赖即可
          }
        }
        break;
    }
  }
}