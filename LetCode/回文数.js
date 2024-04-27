/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // let arr = x.toString().split('')
  // let flag = false
  // for (let i = 0; i < arr.length / 2; i++) {
  //   if (arr[i] === arr[arr.length - 1 - i]) {
  //     flag = true
  //   } else { flag = false 
  //     break
  //   }
  // }
  // return flag
  let arr = x.toString().split('')
  // if (arr.length % 2 === 1) {
  //   arr.splice(arr.length / 2, 1)
  // }
  console.log('[ String(x) ]', String(x))
//  let newa = arr.reverse().join('')
 
//  console.log('[ newa ]', newa)
  // return arr === arr.reverse().join('') ? true :false
  return String(x) === String(x).split('').reverse().join('') ? true : false
  



};
console.log(isPalindrome(121))
