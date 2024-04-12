// Array.prototype.myjoin = function (s = ",") {
//   let str = "";
//   for (let i = 0; i < this.length; i++) {
//     str = i === 0 ? `${str}${this[i]}` : `${str}${s}${this[i]}`;
//   }
//   return str;
// };

Array.prototype.myJoin = function (s = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += String(this[i]);
    if (i !== this.length - 1) {
      result += s;
    }
  }
  return result;
};
// fruits.concat()
Array.prototype.myConcat = function (...arr2) {
  let res = this;
  for (let i = 0; i < arr2.length; i++) {
    res.push(arr[i]);
  }
  return res;
};
// fruits.
const fruits = ["apple", "banana", "orange"];
const fruits1 = ["11", "banana", "orange", ["1", "1", "3", "3", ["j"]]];
const result = fruits.myJoin("-");
const result1 = fruits.myJoin("*");
const result2 = fruits.myJoin();
let res = fruits1.flat(2);
console.log(res);
console.log(result); // 输出 "apple-banana-orange"
console.log(result1); // 输出 "apple-banana-orange"
console.log(result2); // 输出 "apple-banana-orange"
// console.log(fruits.at(0));
console.log(fruits.values());
