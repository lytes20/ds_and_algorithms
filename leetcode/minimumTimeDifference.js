/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let minDifference = Number.MAX_SAFE_INTEGER;

  const minutes = [];
  for (let i = 0; i < timePoints.length; i++) {
    const time = timePoints[i];
    let [hH, mM] = time.split(":");
    [hH, mM] = [Number(hH), Number(mM)];
    minutes[i] = hH * 60 + mM;
  }
  minutes.sort();
  for (let i = 0; i < minutes.length; i++) {
    minDifference = Math.min(minDifference, minutes[i + 1] - minutes[i]);
  }
  console.log(minDifference);
};
