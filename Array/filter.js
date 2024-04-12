const Football = [
  { name: "messi", num: 36 },
  { name: "peli", num: 23 },
  { name: "Maradona", num: 33 },
  { name: "Ronaldo", num: 38 },
];
Array.prototype.myFilter = function (callback, thisArg = this) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this) && res.push(this[i]);
  }
  return res;
};
const res = Football.myFilter((item) => {
  return item.num > 35;
});
console.log(res);
