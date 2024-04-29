// Promise.resolve(1)
//   .then((res)=> {
// return 'ggg'
//   })
//   .then(Promise.resolve(3).then(res => {
//     return 'asda'
//   }))
//   .then(res => {
//     console.log('[ res ]', res)
//     return res
//   })
  function findMinRepeatingSubstring(s) {
    let start = 0;
    let end = 1;
    let minSubstring = s;

    while (end < s.length) {
        if (s[start] === s[end]) {
            let substring = s.substring(start, end);
            let i = end;
            while (i < s.length && s[i] === s[i % substring.length]) {
                i++;
            }
            if (i === s.length) {
                minSubstring = substring;
                break;
            }
        }
        end++;
    }

    return minSubstring;
}

// 示例用法
const s = "ababab";
console.log(findMinRepeatingSubstring(s)); // 输出 "ab"
