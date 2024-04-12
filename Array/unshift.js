Array.prototype.myUnshift = function (...items) {
  for (let i = 0; i < items.length; i++) {
    // 在数组开头插入元素
    for (let j = this.length - 1; j >= 0; j--) {
      // 将元素依次向后移动一位
      this[j + 1] = this[j];
    }
    this[0] = items[i]; // 在开头插入新元素
  }
  return this.length; // 返回修改后数组的新长度
};
const arr = [1, 2, 3];
console.log(arr.myUnshift(0)); // 输出 4
console.log(arr); // 输出 [0, 1, 2, 3]

let res = arr.myUnshift(-1, -2);
console.log(arr); // 输出 [-2, -1, 0, 1, 2, 3]
console.log(res); // 输出 [-2, -1, 0, 1, 2, 3]
