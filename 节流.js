function throttle(fn, interval) {
  let lastTime = 0
  return function () {
    const time = new Date().getTime()
    const cTime = time - (interval - lastTime)
    if (cTime <= 0) {
      fn()
      lastTime = time
    }
  }
}