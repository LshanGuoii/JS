function MyNew(fn, ...args) {
  // 创建一个空对象
  let obj = {}
  //继承构造函数的原型
  obj._proto_ = fn_prototype
  //this指向obj 调用fn
  fn.apply(obj, args)
  // 返回对象
  return obj
}