function debounce(fn, wait) {
  let timer = null
  return function (...args) {
    if (timer) clearInterval(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

//2.18
function debounce1(fn, wait) {
  let timer = null
  return function (...args) {
    if (timer) clearInterval(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}