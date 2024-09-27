/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const results = [];
  if (!expression) {
    return [];
  }

  if (expression.length === 1) {
    results.push(expression);
    return results;
  }

  if (expression.length === 2) {
    results.push(Number(expression));
    return results;
  }

  for (let i = 0; i < expression.length; i++) {
    const currentChar = expression[i];
    // if(currentChar)
  }
};
