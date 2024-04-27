// 输入:3,12aBc-abCABc-4aB@
// 输出:12aBc-abc-ABC-4aB-@
// 把给定的字符按n分为多少个中间用-连接,
// 原字符串-左边的第一个不动,
// 之后分成的子字符串里面如果大写字母多就转成大写字母,小写字母多就转成小写字母,否则不转
function getStr(n, str) {
  let index = str.indexOf('-')
  if (index === -1) {
    return str;
  } else {
    let str1 = str.slice(0, index)
    // console.log(str1)
    let str2 = str.slice(index + 1)
    // console.log(str2)
    let arr = str2.split("-").join("").split("")
    arr.forEach((item, index) => {
      // console.log((index+1)%n)
      // (index+1)!==arr.length这里是如果刚好到最后一个字符就不加
      if ((index + 1) % n === 0 && (index + 1) !== arr.length) {
        arr[index] = arr[index] + "-"
      }
    })
    // console.log(arr.join(""))
    let resultArr = arr.join("").split("-")
    resultArr.forEach((item, index) => {
      resultArr[index] = getUpOrLo(resultArr[index])
    })
    // console.log(resultArr)
    if (!str) {
      resultArr.join("-")
    } else {
      return str1 + '-' + resultArr.join("-")
    }
  }

}
// 转换的方法
function getUpOrLo(arr) {
  let obj = {
    lower: 0,
    upper: 0
  }
  let tempArr = arr.split('')
  tempArr.forEach((item, index) => {
    if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
      obj.upper += 1
    } else if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
      obj.lower += 1
    }
  })
  // console.log(obj)
  if (obj.lower > obj.upper) {
    return arr.toLowerCase()
  } else if (obj.lower < obj.upper) {
    return arr.toUpperCase()
  } else {
  }
}
