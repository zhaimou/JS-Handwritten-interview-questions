Array.prototype.myPop = function () {
  let res = this[this.length - 1];
  // 删除最后一个元素
  this.length--;
  // 返回最后一个元素
  return res;
};
let arr = [1, 2, 3];
let res = arr.myPop();
console.log(res); // 3
console.log(arr); // 3
