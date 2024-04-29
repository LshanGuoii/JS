function throttle(fn, interval) {
  let lastTime = 0
  return function () {
    const time = new Date().getTime()
    const cTime = interval - (time - lastTime)
    if (cTime <= 0) {
      fn()
      lastTime = time
    }
  }
}
function throttle(fn, interval) {
 let lastTime = 0
 return function(...args) {
  const current = new Date().getTime()
  let ctime = interval - (current- lastTime)
  if (ctime <=0) {
    fn()
    lastTime = ctime
  }
 }
}