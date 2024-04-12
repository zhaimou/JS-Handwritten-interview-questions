// const players = [
//   { name: "科比", num: 24 },
//   { name: "詹姆斯", num: 23 },
//   { name: "保罗", num: 3 },
//   { name: "威少", num: 0 },
//   { name: "杜兰特", num: 35 },
// ];
// const players1 = [
//   { name: "科比", num: 25 },
//   { name: "詹姆斯", num: 23 },
//   { name: "保罗", num: 3 },
//   { name: "威少", num: 0 },
//   { name: "杜兰特", num: 35 },
//   function say() {
//     console.log("say");
//   },
// ];
Array.prototype.myfind = function (callback, thisArg = this) {
  for (let i = 0; i < this.length; i++) {
    // console.log(thisArg);
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

// }, players1);
// console.log(res);
// arr.find();
// 返回结果
// const result = players.myfind((item) => {
//   if (item.name === "威少1") {
//     return item;
//   }
// });
// // console.log(result);
// const arr = [1, "2", true, [3, 4], undefined, null];
const arr = [11, 22, 22, 33, 44];
let arr1 = arr.indexOf(22);
console.log(arr1); // 1
// console.log(arr.find(f));
// let arr1 = arr.indexOf((item) => {
//   if (item === 1) {
//     return 1;
//   }
// });
// console.log(arr1);
// arr.lastIndexOf("2");
// let arr2 = arr.includes([3, 4]);
// console.log(arr2);
// arr.find();
// arr.findIndex(1);
