const Football = [
  { name: "messi", num: 36 },
  { name: "peli", num: 23 },
  { name: "Maradona", num: 33 },
  { name: "Ronaldo", num: 38 },
];
Array.prototype.mySome = function (callback, thisArg = this) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    flag = callback.call(thisArg, this[i], i, this);
    if (flag) break;
  }

  return flag;
};
const res = Football.mySome((item) => item.num > 22);
const res1 = Football.mySome((item) => item.num > 38);
console.log(res);
console.log(res1);
// Football.fill("zhaimou");
