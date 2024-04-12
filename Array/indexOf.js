// Array.prototype.indexOf = function (serachElement, fromIndex = 0) {
//   for (let i = fromIndex; i < this.length; i++) {
//     if (this[i] === serachElement) {
//       return i;
//     }
//     return -1;
//   }
// };
// Array.prototype.myLastIndexOf = function (
//   serachElement,
//   fromIndex = this.length - 1
// ) {
//   for (let i = fromIndex; i >= 0; i--) {
//     if (this[i] === serachElement) {
//       return i;
//     }
//   }
//   return -1;
// };
// const arr = [11, 22, 33, 44, 55, 11];
// const res = arr.myLastIndexOf(11);
// console.log(res);
// Array.prototype.myIncludes = function (serachElement, fromIndex = 0) {
//   for (let i = fromIndex; i < this.length; i++) {
//     if (this[i] === serachElement) {
//       return true;
//     }
//     return false;
//   }
// };
// const arr = [11, 22, 33, 44, 55, 11];
// const res = arr.myIncludes(11);
// console.log(res);
