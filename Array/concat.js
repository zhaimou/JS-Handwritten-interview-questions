Array.prototype.myConcat = function (...args) {
  let res = this;
  for (let i = 0; i < args.length; i++) {
    let currentElement = args[i];
    if (Array.isArray(currentElement)) {
      for (let i = 0; i < currentElement.length; i++) {
        res.push(currentElement[i]);
      }
    } else {
      res.push(currentElement);
    }
  }
  return res;
};
let res = [1, 2, 3];
let res1 = [4, 5, 6];
let res2 = [7, 8, 9];
const result = res.myConcat(res1, res2);
console.log(result);
