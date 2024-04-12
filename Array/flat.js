// Array.prototype.myflat = function () {
//     let arr = this
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr)
//     }
//     return arr
// }

// const testArr = [1, [2, 3, [4, 5], [8, 9]]];

// console.log(testArr.myflat())
// 扁平化数组
Array.prototype.myFlat = function (depth = 1) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (Array.isArray(item) && depth > 0) {
      res.push(...item.myFlat(depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
};
const textArr = ["11", "banana", "orange", ["1", "1", "3", "3", ["j"]]];
let res = textArr.myFlat(2);
console.log(res);
/*
[
    '11',     'banana',
    'orange', '1',
    '1',      '3',
    '3',      'j'
  ]
*/
