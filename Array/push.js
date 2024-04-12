Array.prototype.myPush = function (...items) {
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }
  //   this.length = this.length + items.length;
  return this.length; // 返回数组的长度
};
let res = [1, 2, 3, 4, 5];
res.myPush(6, 7, 8);
console.log(res);
