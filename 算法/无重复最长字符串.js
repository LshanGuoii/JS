var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    debugger
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max);
  }
  return max;
};
// console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
// const isValid = function (s) {
//   if (s.length % 2 === 1) {
//     return false;
//   }
//   const regObj = {
//     "{": "}",
//     "(": ")",
//     "[": "]",
//   };
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
//       stack.push(s[i]);
//     } else {
//       debugger
//       const cur = stack.pop();
//       if (s[i] !== regObj[cur]) {
//         return false;
//       }
//     }
//   }

//   if (stack.length) {
//     return false;
//   }

//   return true;
// };
// console.log(isValid("(]"))