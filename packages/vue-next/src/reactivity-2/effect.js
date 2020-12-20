
export function effect(fn, options) {
  const effect = createReactiveEffect(fn, options);

  return effect;
}

function createReactiveEffect() {
  
}