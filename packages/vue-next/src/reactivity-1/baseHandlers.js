function createGetter(isReadonly = false, shallow = false) {}

function createSetter(shallow = false) {}

const get = createGetter()
const set = createSetter()

export const mutableHandlers = {
  get,
  set,
  // deleteProperty,
  // has,
  // ownKeys
}

