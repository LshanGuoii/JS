let activeFn = null

// 加入函数
function watchFn(fn) {
  activeFn = fn
  fn()
  activeFn = null
}

class Deeped {
  constructor() {
    this.reactiveFn = new Set()
  }
  deeped() {
    if (activeFn) {
      this.reactiveFn.add(activeFn)
    }
  }
  notify() {
    this.reactiveFn.forEach(fn => {
      fn()
    })
  }
}

let targetMap = new WeakMap()
function getDep(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
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
    get(target, key, receiver) {
      const deeped = getDep(target, key)
      deeped.deeped()
      return Reflect.get(target, key, receiver)

    },
    set(target, key, newValue, receiver) {

      Reflect.set(target, key, newValue, receiver)
      const deeped = getDep(target, key)
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
objProxy.name = 'xx'