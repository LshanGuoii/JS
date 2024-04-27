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
// const s = "abdabdab";

console.log(findMinRepeatingSubstring(s)); // 输出 "ab"
// 一种常见的解决方法是使用双指针技巧。具体步骤如下：

// 从字符串的第一个字符开始，设置一个指针 start，用于标记当前循环子字符串的起始位置。
// 使用另一个指针 end，从 start 的下一个位置开始向后移动，直到找到一个与 start 位置字符相同的字符。
// 一旦找到相同的字符，将当前的子字符串与之前的循环子字符串进行比较，如果相同则继续，如果不同则更新循环子字符串。
// 继续移动 end 指针，直到遍历完整个字符串。
// 返回找到的最小循环子字符串。