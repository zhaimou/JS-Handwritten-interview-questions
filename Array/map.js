const Football = [
  { name: "messi", num: 36 },
  { name: "peli", num: 23 },
  { name: "Maradona", num: 33 },
  { name: "Ronaldo", num: 38 },
];
Array.prototype.myMap = function (callback, thisArg = this) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback.call(thisArg, this[i], i, this));
  }
  return res;
};
let res = Football.myMap((item) => {
  return `${item.name} ${item.num}`;
});
console.log(res);
