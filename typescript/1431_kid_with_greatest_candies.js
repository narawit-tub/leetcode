/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // find max
  let maxCandies = 0;
  candies.forEach((numberOfCandies) => {
    if (maxCandies < numberOfCandies) {
      maxCandies = numberOfCandies;
    }
  });

  // then if any number that less then Max - extra will consider as won't have greatest number of candies
  const result = [];
  candies.forEach((numberOfCandies) => {
    if (maxCandies > numberOfCandies + extraCandies) {
      result.push(false);
    } else {
      result.push(true);
    }
  });

  return result;
};
