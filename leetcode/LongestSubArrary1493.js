/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  
//   console.log("nums", nums)
//   console.log("tempArray", tempArray);
  for (i = 0; i < nums.length; i++) {
    const newNums = [...nums]
    newNums.splice(i, 1)
    console.log("newNums", newNums)
    // delete element at given index
    // get new array store it in a temp variable
    // get sub strings of 1s together
    // get length of strings of 1s together
    // if length greater than current length, update
    // otherwise move on
  }

  // return the current length
};

longestSubarray([1, 1, 0, 1]);
