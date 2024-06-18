/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const non_space_s = s.replace(/\s+/g, " ").trim().split(" ");

  let i = 0;
  let j = non_space_s.length - 1;

  while (i < j) {
    const tmp = non_space_s[i];
    non_space_s[i] = non_space_s[j];
    non_space_s[j] = tmp;
    i++;
    j--;
  }

  return non_space_s.join(" ");
};
