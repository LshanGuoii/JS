/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])
  let task = []
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      task.push(s[i])
    } else if (task.pop() !==map.get(s[i])) return false
    
  }
  if (task.length ===0 ) return true 
  return false
  
};
console.log(isValid('()'))