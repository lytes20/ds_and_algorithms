/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let temp = strs[0][0];
  console.log("temp", temp);
  for (let i = 1; i < strs.length; i++) {
    if (strs[i][0] === temp) {
      prefix = temp;
    } else {
      return "";
    }
  }

  // for(let i = 0; i < strs.length; i++){

  // }
  return prefix;
};

const strs = ["flower", "flow", "flight"];
// longestCommonPrefix(strs);
console.log(longestCommonPrefix(strs));
