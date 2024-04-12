const Football = [
  { name: "messi", num: 36 },
  { name: "peli", num: 23 },
  { name: "Maradona", num: 33 },
  { name: "Ronaldo", num: 38 },
];
Array.prototype.myEvery = function (callback, thisArg = this) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    flag = callback.call(thisArg, this[i], i, this);
    if (!flag) break;
  }
  return flag;
};
const res = Football.myEvery((item) => item.num >= 30);
const res1 = Football.myEvery((item) => item.num >= 20);
console.log(res); //false
console.log(res1); //true
