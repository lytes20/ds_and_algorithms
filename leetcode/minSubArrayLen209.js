/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let length = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const arr = [];
      let sum = nums[j];
      arr[j] = nums[j];
      const indexRange = j - i;
      for (let k = i; k < j; k++) {
        sum = sum + nums[k];
        arr[k] = nums[k];
      }
      if (sum >= target) {
        if (indexRange + 1 < length) {
          length = indexRange + 1;
        }
      }
    }
  }
  return length;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
