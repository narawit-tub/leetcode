/**
 * @param {string} s
 * @return {string}
 */

const isVowels = (c) =>
  c === "a" ||
  c === "A" ||
  c === "e" ||
  c === "E" ||
  c === "i" ||
  c === "I" ||
  c === "o" ||
  c === "O" ||
  c === "u" ||
  c === "U";

var reverseVowels = function (s) {
  let i = 0;
  let j = s.length - 1;
  const sArray = s.split("");

  while (i < j) {
    while (!isVowels(sArray[i])) {
      if (i >= j) {
        return sArray.join("");
      }

      i++;
    }

    while (!isVowels(sArray[j])) {
      if (i >= j) {
        return sArray.join("");
      }

      j--;
    }

    // swap
    const tmp = sArray[i];
    sArray[i] = sArray[j];
    sArray[j] = tmp;
    i++;
    j--;
  }

  return sArray.join("");
};
