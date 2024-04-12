// let res = [1, 2, 3];
// // // let res = [1,2,3]
// // console.log(res);
// // res.values()

// const res1 = res.toString();
// const res2 = res.toLocaleString();
// // Array("1").toString(); // "1"
// console.log(res1);
// console.log(res2);
// Array("1").reduceRight();

Array("1").entries;
// Array("1").values;
// Array("1").keys;

Array.prototype.myValues = function () {
  let i = 0;
  return {
    next: () => {
      if (i < this.length) {
        return { value: [i, this[i++]], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};
const array1 = ["a", "b", "c"];
const iterator = array1.myValues();
console.log(iterator.next()); // { value: "a", done: false }
console.log(iterator.next()); // { value: "b", done: false }
console.log(iterator.next()); // { value: "c", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
Array.prototype.myCopyWithin = function (target, start = 0, end = this.length) {
  const sourceStart = start < 0 ? this.length + start : start;
  const sourceEnd = end < 0 ? this.length + end : end;
  // 创建一个数组用于存储结果
  let count = Math.min(sourceEnd - sourceStart, this.length - target);
  // 遍历原始数组
  for (let i = 0; i < count; i++) {
    this[target + i] = this[sourceStart + i];
  }

  return this;
};
// const array = [1, 2, 3, 4, 5];
// const result = array.myCopyWithin(2, 4, 5);
// console.log(result); // 输出：[1, 2, 5, 4, 5]
// console.log(array); // 输出：[1, 2, 5, 4, 5]
