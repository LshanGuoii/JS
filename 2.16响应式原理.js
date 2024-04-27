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
// weakmap 进行多个对象的依赖的管理
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
// vue2
// function reactive(obj) {
//   // {name: "why", age: 18}
//   // ES6之前, 使用Object.defineProperty
//   Object.keys(obj).forEach(key => {
//     let value = obj[key]
//     Object.defineProperty(obj, key, {
//       get: function() {
//         const depend = getDepend(obj, key)
//         depend.depend()
//         return value
//       },
//       set: function(newValue) {
//         value = newValue
//         const depend = getDepend(obj, key)
//         depend.notify()
//       }
//     })
//   })
//   return obj
// }
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
  name: 'ls',
  age: 18
})
watchFn(() => {

  console.log(objProxy.name)
  // console.log(objProxy.age)
})
// objProxy.age = 14
// const foo = reactive({
//   name: "foo"
// })
objProxy.name = 'ss'

// watchFn(() => {
//   console.log(foo.name)
// })

// foo.name = "bar"

// 1.响应式函数的设计 ，传入时就会调用一次 这时候get检测到进行依赖收集
// 2.响应式依赖的收集， 利用类 监听保存多个相应函数
// 3.监听对象的变化，利用proxy和reflet
// 4.对象的依赖管理，多个对象有许多属性需要管理，利用weakmap 弱引用 管理不同的对象属性
// tip： 方法数组变为set 防止重复

// 1.class Deepend类封装：保存多个函数
// 2. reactive () 监听对象变化 利用proxy和reflet， 调用getDepend
// 3. getDepend 管理依赖对象 利用weakmap对多个对象管理 