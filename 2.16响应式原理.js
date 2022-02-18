let activeFn = null

function watchFn(fn) {
  activeFn = fn
  fn()
  activeFn = null
}
class Deeped {
  constructor() {
    this.activeReactiveFn = new Set()
  }
  deeped() {
    if (activeFn) {
      this.activeReactiveFn.add(activeFn)
    }
  }
  notify() {
    this.activeReactiveFn.forEach(fn => {
      fn()
    })
  }
}

const targetMap = new WeakMap()
function getDep(traget, key) {
  let map = targetMap.get(traget)
  if (!map) {
    map = new Map()
    targetMap.set(traget, map)
  }
  let deeped = map.get(key)
  if (!deeped) {
    deeped = new Deeped()
    map.set(key, deeped)
  }
  return deeped
}

function reactive(obj) {
  return new Proxy(obj, {
    get(traget, key, receiver) {
      const deeped = new getDep(traget, key)
      deeped.deeped()

      return Reflect.get(traget, key, receiver)
    },
    set(traget, key, newValue, receiver) {
      Reflect.set(traget, key, newValue, receiver)

      const deeped = new getDep(traget, key)
      deeped.notify()

    }
  })
}
const objProxy = reactive({
  name: 'ls'
})
watchFn(() => {
  console.log(objProxy.name)
})
objProxy.name = 'ss'