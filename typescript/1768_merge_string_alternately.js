/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let word1Index = 0;
  let word2Index = 0;
  let mergedStr = "";

  while (word1Index < word1.length || word2Index < word2.length) {
    if (word1[word1Index]) {
      mergedStr = mergedStr.concat(word1[word1Index++]);
    }

    if (word2[word2Index]) {
      mergedStr = mergedStr.concat(word2[word2Index++]);
    }
  }

  return mergedStr;
};
