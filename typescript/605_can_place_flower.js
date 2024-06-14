/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let numberOfPlantable = 0;

  flowerbed.forEach((area, index) => {
    if (area !== 0) {
      return;
    }

    const isPreviousAreaEmpty =
      flowerbed[index - 1] === undefined || flowerbed[index - 1] === 0;
    const isNextAreaEmpty =
      flowerbed[index + 1] === undefined || flowerbed[index + 1] === 0;

    if (isPreviousAreaEmpty && isNextAreaEmpty) {
      numberOfPlantable++;
      flowerbed[index] = 1;
    }
  });

  console.log(numberOfPlantable);
  return numberOfPlantable >= n;
};
