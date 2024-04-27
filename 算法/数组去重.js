function distinct(a, b) {
  let arr = a.concat(b);
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

console.log(distinct([1, 3, 4, 5, 4, 3, 6, 3, 4]))

function unique(arr) {
  let arrLen = arr.length
  let newArr = []
  for (let i = 0; i < arrLen; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(unique([1, 3, 4, 5, 4, 3, 6, 3, 4]))
//方式：
// 1.双for
// 2.for+indexOf
// 3.for+incluses
// 4.fiflter +indexof
// 5.数组排序后去重 只能去重数组
// 6.对象键值对去重  性能好 undefined无法无法屈从
// 7.reduce 对象去重
// 8.set