
Function.prototype.lscall = function (thisArg, ...args) {
  console.log('[ args ]', args)

  // 处理传入不得对象 或者null的情况 null需要绑定为window
  thisArg = (thisArg !== null && this !== undefined) ? Object(thisArg) : window
  thisArg.fn = fn
  const result = thisArg.fn(...args)
  delete thisArg.fn
  return result
}
function sum(num1, num2) {
  console.log("sum函数被执行", this, num1, num2)
  return num1 + num2
}
var result = sum.lscall("abc", 20, 30)
console.log("hycall的调用:", result)
