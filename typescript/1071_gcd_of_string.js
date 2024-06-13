/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const isDiviable = function (str1, str2, gcdCandidateStr) {
  if (
    str1.length % gcdCandidateStr.length != 0 ||
    str2.length % gcdCandidateStr.length != 0
  ) {
    return false;
  }

  if (
    str1 !== gcdCandidateStr.repeat(str1.length / gcdCandidateStr.length) ||
    str2 !== gcdCandidateStr.repeat(str2.length / gcdCandidateStr.length)
  ) {
    return false;
  }

  return true;
};

var gcdOfStrings = function (str1, str2) {
  let isFoundGCD = false;
  let baseStr = null;

  // set base string, pick the shorter one
  if (str1.length < str2.length) {
    baseStr = String(str1);
  } else {
    baseStr = String(str2);
  }

  while (!isFoundGCD && baseStr != "") {
    if (isDiviable(str1, str2, baseStr)) {
      isFoundGCD = true;
      continue;
    }

    baseStr = baseStr.substring(0, baseStr.length - 1);
  }

  return baseStr;
};
