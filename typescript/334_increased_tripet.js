/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let firstNum = Number.MAX_VALUE;
  let secondNum = Number.MAX_VALUE;
  let isFound = false;

  nums.forEach((num) => {
    if (num <= firstNum) {
      firstNum = num;
      return;
    }

    if (num <= secondNum) {
      secondNum = num;
      return;
    }

    if (num > secondNum) {
      isFound = true;
    }
  });

  return isFound;
};
