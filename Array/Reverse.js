Array.prototype.myReverse = function () {
    for (let i = 0; i < this.length / 2; i++) {
        let temp = this[i];
        this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = temp;
}
return this;
};
let arr = [1, 2, 3, 4, 5, 6];
arr.reverse();
console.log(arr);
// console.log(arr.myReverse());
let str = "zhaimou";
// console.log(arr.reverse());
const ArraytoStr = str.split("");
// console.log(ArraytoStr);
const RevtoStr = ArraytoStr.myReverse();
// console.log(RevtoStr);
const str1 = str.split("").myReverse().join("");
console.log(str1);

