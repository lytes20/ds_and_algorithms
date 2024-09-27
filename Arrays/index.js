/**
 *
 * Given an array of distinct integer values,
 * count the number of pairs of integers that have difference k.
 *  For example, given the array {1, 7, 5, 9, 2, 12, 3} and the difference k = 2,
 * there are four pairs with difference 2: (1, 3), (3, 5), (5, 7), (7, 9) .
 */
// const countPairs = (arr) => {
//   let sumOfPairs = 0;
//   for (i = 0; i < arr.length - 1; i++) {
//     const curr = arr[i];
//     for (j = i + 1; j < arr.length; j++) {
//       const colleague = arr[j];
//       if (Math.abs(curr - colleague) === 2) {
//         sumOfPairs = sumOfPairs + 1;
//       }
//     }
//   }
//   console.log("sumOfPairs", sumOfPairs);
// };

// You can use a binary search in the second loop
// const countPairs = (arr, k) => {
//   let sumOfPairs = 0;
//   arr.sort((a,b) => a-b)
//   console.log("arr", arr)
//   for (i = 0; i < arr.length - 1; i++) {
//     const lookUp = arr[i] + k;
//     for (j = i + 1; j < arr.length; j++) {
//       if(lookUp === arr[j]){
//         sumOfPairs = sumOfPairs + 1;
//       }
//     }
//   }
//   console.log("sumOfPairs", sumOfPairs);
// };

const countPairs = (arr, k) => {
  let sumOfPairs = 0;
  const arrObj = {};
  for (i = 0; i < arr.length - 1; i++) {
    arrObj[i] = arr[i];
  }

  console.log("arrObj", arrObj)
  for (i = 0; i < arr.length - 1; i++) {
    const curr = arr[i];
    if (arrObj[i] === curr) {
      sumOfPairs = sumOfPairs + 1;
    }
  }
  console.log("sumOfPairs", sumOfPairs);
};
const myArr = [1, 7, 5, 9, 2, 12, 3];
countPairs(myArr, 2);
