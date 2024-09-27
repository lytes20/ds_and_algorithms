/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const words = {};
  const s1Words = s1.split(" ");
  const s2Words = s2.split(" ");
  for (let i = 0; i < s1Words.length; i++) {
    const s1Word = s1Words[i];
    if (words[s1Word]) {
      words[s1Word] = words[s1Word] + 1;
    } else {
      words[s1Word] = 1;
    }
  }

  for (let i = 0; i < s2Words.length; i++) {
    const s2Word = s2Words[i];
    if (words[s2Word]) {
      words[s2Word] = words[s2Word] + 1;
    } else {
      words[s2Word] = 1;
    }
  }
  const unCommon = [];
  Object.entries(words).forEach(([word, frequency]) => {
    if (frequency === 1) {
      unCommon.push(word);
    }
  });
  return unCommon;
};
