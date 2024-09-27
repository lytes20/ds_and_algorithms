/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  let prefixCounts = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let prefix = "";
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      prefix = prefix + char;
      if (prefixCounts[prefix]) {
        prefixCounts[prefix] = prefixCounts[prefix] + 1;
      } else {
        prefixCounts[prefix] = 1;
      }
    }
  }

  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let prefix = "";
    let sum = 0;
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      prefix = prefix + char;
      sum = sum + prefixCounts[prefix];
    }
    result[i] = sum;
  }

  return result;
};
