// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?
// Hints: #44, # 777, # 732

// function hasAllCharactersUnique(str) {
//   const strObj = {};
//   for (let i = 0; i < str.length; i++) {
//     const character = str[i];
//     if (strObj[character]) {
//       return false;
//     } else {
//       strObj[character] = true;
//     }
//   }
//   return true;
// }

function hasAllCharactersUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
      //   console.log(str[i], str[j]);
    }
  }
  return true;
}

console.log(hasAllCharactersUnique("loop"));
