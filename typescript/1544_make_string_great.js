/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];

  s.split("").forEach((c, index) => {
    if (
      c === c.toUpperCase() &&
      stack.length > 0 &&
      stack[stack.length - 1] === c.toLowerCase()
    ) {
      stack.pop();
      return;
    }

    if (
      c === c.toLowerCase() &&
      stack.length > 0 &&
      stack[stack.length - 1] === c.toUpperCase()
    ) {
      stack.pop();
      return;
    }

    stack.push(c);
  });

  return stack.join("");
};
