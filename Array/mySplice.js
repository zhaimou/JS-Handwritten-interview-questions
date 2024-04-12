Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let deleted = [];

  // 删除原数组元素
  for (let i = start; i < start + deleteCount; i++) {
    deleted.push(this[i]);
    delete this[i];
  }

  // 移动剩余元素
  for (let i = start + deleteCount; i < this.length; i++) {
    this[i - deleteCount] = this[i];
    delete this[i];
  }

  // 插入新元素到指定位置
  for (let i = 0; i < items.length; i++) {
    this[start + i] = items[i];
  }

  // 调整数组长度
  this.length -= deleteCount;

  return deleted;
};

// 示例用法
const arr = [1, 2, 3, 4, 5];
const deleted = arr.mySplice(1, 2, "a", "b");
console.log(arr); // 输出 [1, 'a', 'b', 4, 5]
console.log(deleted); // 输出 [2, 3]
