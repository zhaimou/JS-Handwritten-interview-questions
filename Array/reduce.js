// const players = [
//   { name: "科比", num: 24 },
//   { name: "詹姆斯", num: 23 },
//   { name: "保罗", num: 3 },
//   { name: "威少", num: 0 },
//   { name: "杜兰特", num: 35 },
// ];
const Football = [
  { name: "messi", num: 36 },
  { name: "peli", num: 23 },
  { name: "Maradona", num: 33 },
  { name: "Ronaldo", num: 38 },
];
Array.prototype.myReduce = function (callback, ...args) {
  let start = this.length;
  pre = this[this.length - 1];
  //   let pre  ;
  if (args) {
    pre = args[0];
  } else {
    start = this.length - 2;
  }
  for (let i = start; i >= 0; i--) {
    pre = callback(pre, this[i], i, this);
  }
  return pre;
};
const res = Football.myReduce((prev, next) => {
  console.log(prev, next.num, next.name);
  return prev + next.num;
}, 1);
console.log(res);
Array.prototype.reduceRight = function (callback, initialValue) {
  let accumulator =
    initialValue === undefined ? this[this.length - 1] : initialValue;
  for (let i = this.length - 2; i >= 0; i--) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
// Array.prototype.myReduce = function (callback, ...args) {
//   //   if (typeof callback !== "function") {
//   //     throw "fn必须是函数";
//   //   }
//   //   if (!Array.isArray(this)) {
//   //     throw "arr必须是数组";
//   //   }
//   let start = 0,
//     pre;
//   if (args.length) {
//     pre = args[0];
//   } else {
//     pre = this[0];
//     start = 1;
//   }
//   for (let i = start; i < this.length; i++) {
//     pre = callback(pre, this[i], i, this);
//   }
//   return pre;
// };
// // const sum = players.myReduce((pre, next) => {
// //   return pre + next.num;
// // }, 0);
// // console.log(sum);
