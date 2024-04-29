function debounce(fn, wait) {
  let timer = null
  const _debounce = function (...args) {
    if (timer) clearInterval(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
  return _debounce
}
// function test(a, b, c) {
// }
//  const a =debounce(test, 3000)
//  a(1,2,3)
//2.18

// function debounce1 (fn,wait) {
//   return  function(...args) {
//     let timer = null
//     if (timer) clearTimeout(timer)
//       timer = setTimeout(() =>{
//         fn.apply(this,args)
//       },wait)
//   }
   
// }
// function test(a, b, c) {
//   console.log(111)
// }
//  const a =debounce1(test, 3000)
//  a(1,2,3)