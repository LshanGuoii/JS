function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length === 1) return
  let lastIndex = arr.length - 1
  while (lastIndex) {
    let flag = true
    let k = lastIndex
    for (let j = 0; j < k; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false,
          lastIndex = j;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    if (flag) {
      break
    }
  }
  return arr
}
var ar = [3, 2, 6, 9, 4, 1]
console.log(bubbleSort(ar))
// 复杂度为on   最坏为on平方  评价on平方 这个可能到on 空间复杂度o（1）

function bubbleSort2(arr) {
  let temp = null

  for (let i = 0; i < arr.length; i++) {
    let flag = 0
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = 1
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    if (!flag) break
  }
  return arr
}
var ar2 = [3, 2, 6, 9, 4, 1]
console.log(bubbleSort2(ar2))

for(let i =0;i<arr.length;i++) {

  for(let j = 0;j<arr.length -1 -i;j++ )
}