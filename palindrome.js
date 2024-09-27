/**
 * A palindrome is a word, phrase, or sequence that reads the same backwards as forwards,
 * e.g. madam or nurses run.
 *
 */

const myString = "kayak";

const isPalindrome = (str) => {
  // Reverse the string
  const reversedString = str.split("").reverse().join("");

  // compare original String with reversedString
  if (reversedString === str) {
    return true;
  }
  return false;
};

console.log(isPalindrome("kayak"));
