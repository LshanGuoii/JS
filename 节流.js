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
  let lastTime = null

  return function () {

    let currentTime = new Date().getTime()
    cTime = interval - (currentTime - lastTime)
    if (cTime <= 0) {
      fn()
      lastTime = currentTime
    }
  }
}