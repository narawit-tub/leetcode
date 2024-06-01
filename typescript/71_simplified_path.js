/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];

  path.split("/").forEach((word, index) => {
    if (!word || word === ".") {
      return;
    }

    if (word === "..") {
      stack.pop();
      return;
    }

    stack.push(word);
  });

  return "/" + stack.join("/");
};

// var simplifyPath = function(path) {
//     const stack = []

//     path.split('').forEach((c, index) => {
//         if (c === '/' && index === path.length - 1 && stack[stack.length - 1] === '/' && stack.length > 1) {
//             stack.pop()
//             return;
//         }

//         if (c === '/' && index === path.length - 1) {
//             return;
//         }

//         if (c === '/' && index !== 0 && stack[stack.length - 1] === '/') {
//             return;
//         }

//         if (c === '.' && stack[stack.length - 1] === '.' && stack[stack.length - 2] !== '.' && path[index+1] === '/') {
//             // keep poping stack until find two '/''
//             let foundSlash = 2
//             while (foundSlash != 0 && stack.length > 1) {
//                 const value = stack.pop()

//                 if (value === '/') {
//                     foundSlash--;
//                 }
//             }

//             return;
//         }

//         if (c=== '.' && stack[stack.length - 1] === '/' && path[index+1] === '/') {
//             return;
//         }

//         stack.push(c)
//     })

//     return stack.join("")
// };
