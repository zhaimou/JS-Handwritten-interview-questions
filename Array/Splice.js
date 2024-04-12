// Array.prototype.mySplice = function (start, deleteCount) {
//   let deletetotalCount = Math.min(deleteCount, this.length - start);
//   for (let i = start; i < this.length - deletetotalCount; i++) {
//     this[i] = this[deletetotalCount + i];
//   }
//   this.length -= start;
// };
Array.prototype.SelfSplice = function (start, deleteCount, ...items) {
  let deleted = [];
  let DeleteCountIndexlength = start + deleteCount;
  DeleteCountIndexlength = Math.min(DeleteCountIndexlength, this.length);
  // 保存返回值,并删除原数组数据
  for (let i = start; i < DeleteCountIndexlength; i++) {
    deleted.push(this[i]);
    delete this[i];
  }
  // 移动剩余元素

  this.length = this.length - deleteCount + items.length;
  for (let i = start + deleteCount; i < this.length; i++) {
    this[i - deleteCount + items.length] = this[i];
  }
  //   // 删除多余的元素
  for (let i = this.length - deleteCount + items.length; i < this.length; i++) {
    delete this[i];
  }
  // 插入元素到指定位置
  for (let i = 0; i < items.length; i++) {
    this[start + i] = items[i];
  }
  // 更新length
  this.length = this.length - deleteCount + items.length;
  return deleted;
};
const arr = [1, "2", true, [3, 4], undefined, null];
const arr1 = arr.SelfSplice(1, 5, 44, 55, 66);
console.log(arr);
console.log(arr1);
// console.log(arr.mySplice(2));
// console.log(arr.mySplice(3));
// Array.prototype.selfSlice = function (start, end) {
//   if (start < 0 || start > this.length) return [];
//   if (end < 0 || end > this.length) end = this.length;
//   let result = [];
//   for (let i = start; i < end; i++) {
//     result.push(this[i]);
//   }
//   return result;
// };
// let arr1 = arr.selfSlice(1, 13);
// console.log(arr1);
// 用js实现splice;
