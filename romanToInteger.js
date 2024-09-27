// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//   const romanLookUp = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let int = 0;
//   if (s.length === 1) {
//     int = romanLookUp[s];
//   }
//   if (s.length > 1) {
//     const romanChars = s.split("");
//     console.log("romanChars", romanChars);
//     let sum = 0;
//     romanChars.forEach((romanChar, index) => {
//       console.log(sum);

//       // Case for I | V and X
//       if (romanChar === "I" && romanChars[index + 1] === "V") {
//         romanChars.splice(index+1, 1);
//         sum = sum + 4;
//       } else if (romanChar === "I" && romanChars[index + 1] === "X") {
//         romanChars.splice(index+1, 1);
//         sum = sum + 9;

//         // Case for X | L and C
//       } else if (romanChar === "X" && romanChars[index + 1] === "L") {
//         romanChars.splice(index+1, 1);
//         sum = sum + 40;
//       } else if (romanChar === "X" && romanChars[index + 1] === "C") {
//         romanChars.splice(index+1, 1);
//         sum = sum + 90;

//         // Case for C | D and M
//       } else if (romanChar === "C" && romanChars[index + 1] === "D") {
//         romanChars.splice(index+1, 1);
//         sum = sum + 400;
//       } else if (romanChar === "C" && romanChars[index + 1] === "M") {
//         console.log("We are here for CM")
//         romanChars.splice(index+1, 1);
//         sum = sum + 900;

//         // Default
//       } else {
//         sum = sum + romanLookUp[romanChar];
//       }
//     });

//     int = sum;
//   }
//   return int;
// };

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanLookUp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;
  if (s.length === 1) {
    return romanLookUp[s];
  }

  for (let i = 0; i < s.length; i++) {
    const romanChar = s.charAt(i);
    const nextRomanChar = s.charAt(i + 1);
    if (romanLookUp[romanChar] < romanLookUp[nextRomanChar]) {
      int = int - romanLookUp[romanChar];
    } else {
      int = int + romanLookUp[romanChar];
    }
  }

  return int;
};

console.log(romanToInt("MCMXCIV"));
