// function myFlatMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const mappedValues = callback(arr[i]);
//     for (let j = 0; j < mappedValues.length; j++) {
//       if (Array.isArray(mappedValues[j])) {
//         result.push(...mappedValues[j]);
//       } else {
//         result.push(mappedValues[j]);
//       }
//     }
//   }
//   return result;
// }
let arr = [1, 2, 3];
// console.log(res1);
// console.log(...arr);
// arr.flatMap();
Array.prototype.myFlatMap = function (callback, thisArg = this) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let mapped = callback.call(thisArg, this[i], i, this);
    for (let i = 0; i < mapped.length; i++) {
      if (Array.isArray(mapped[i])) {
        res.push(...mapped[i]);
      } else {
        res.push(mapped[i]);
      }
    }
  }
  return res;
};
let res = arr.myFlatMap((item) => {
  return [item, item * 2];
});
console.log(res);
