/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const chr = s[i];
    if (obj[chr]) {
      obj[chr] = obj[chr] + 1;
    } else {
      obj[chr] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (obj[char] === 1) {
      return i;
    }
  }

  return -1;
};
console.log(firstUniqChar("aabb"));
