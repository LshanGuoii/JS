/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  let result = []
  let flag = 1
  for (let i = 0; i < nums.length; i++) {
      temp = target - nums[i]
      console.log('[ temp ]', temp)
      if ( flag === 0) break
      // let index = nums.indexOf(temp)
      let index = nums.lastIndexOf(temp)

      console.log('[ index ]', index)
      if (index === i) continue
      if (index !== -1) {
          flag = 0
          result = [i, index] 
          console.log('[ result ]', result)
      }

  }
  return result
};
console.log(twoSum([-1,-2,-3,-4,-5,-8], -8))