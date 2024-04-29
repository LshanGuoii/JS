const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 封装函数
function execFnTemplate(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}
class LSPromise {
  constructor(execFn) {
    this.status = PROMISE_STATUS_PENDING
    this.value = null
    this.reason = null
    this.onResolveFns = []
    this.onRejectFns = []
    const resolve = value => {
      if (this.status = PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
        if (this.status !== PROMISE_STATUS_PENDING) return

        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        console.log('[ this.onResolveFns ]', this.onResolveFns)
        this.onResolveFns.forEach(fn => {
          console.log('[ fn ]', fn)
          
          fn(this.value)
        })
        })
      }
    }
    const reject = reason => {
      if (this.status = PROMISE_STATUS_PENDING) {
        if (this.status !== PROMISE_STATUS_PENDING) return

        // 添加微任务
        queueMicrotask(() => {
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }
    execFn(resolve, reject)
  }
  then(onFufilled, onRejected) {
    const defaultOnRejected = err => { throw err }
    // 如果onRejected没有值的情况下。直接抛出异常，前一个不处理err 抛出让catch捕捉到，then返回的是promise
    onRejected = onRejected || defaultOnRejected
    return new LSPromise((resolve, reject) => {
      // 状态以及确定时候的情况
      if (this.status === PROMISE_STATUS_FULFILLED && onFufilled) {
        // const value = onFufilled(this.value) // 第一个promise的返回值
        // resolve(value)
        execFnTemplate(onFufilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // const reason = onRejected(this.reason)
        // reject(reason)
        execFnTemplate(onRejected, this.reason, resolve, reject)

      }
      // 将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onResolveFns.push(() => {
          // const value = onFufilled(this.value) // 第一个promise的返回值
          // resolve(value)
          execFnTemplate(onFufilled, this.value, resolve, reject)

        })
        this.onRejectFns.push(() => {
          // const reason = onRejected(this.reason)
          // reject(reason)
          execFnTemplate(onRejected, this.reason, resolve, reject)

        })

      }
    })


  }
  catch(onRejected) {
    this.then(undefined, onRejected)
  }
  // 类方法 static前缀
  static all(promises) {
    return new LSPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promises.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }
}

const promise = new LSPromise((resolve, reject) => {
  resolve(111)
  // reject(222)
})

// promise.then(res => {
//   console.log('[ res ]', res)
//   return 'aaaa'
// }, err => {
//   console.log('[ err ]', err)
//   return 'cc'
// }).then(res => {
//   console.log('[ cccres ]', res)

// })
promise.then(res => {
  console.log('[ res 2]', res)
}).then(res => {
    console.log('[ cccres ]', res)
  
  })
// setTimeout(() => {
//   promise.then(res => {
//     console.log("res3:", res)
//   }, err => {
//     console.log("err3:", err)
//   })
// }, 1000)W


// const p1 = new Promise((resolve) => {
//   setTimeout(() => { resolve(1111) }, 1000)
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => { resolve(2222) }, 2000)
// })
// const p3 = new Promise((resolve) => {
//   setTimeout(() => { resolve(3333) }, 3000)
// })
// LSPromise.all([p1, p2, p3]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })