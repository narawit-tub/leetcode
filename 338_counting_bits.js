/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [0];
  let offset = 1;

  for (let index = 1; index <= n; index++) {
    if (2 * offset == index) {
      offset = index;
    }

    result[index] = result[index - offset] + 1;
  }

  return result;
};
