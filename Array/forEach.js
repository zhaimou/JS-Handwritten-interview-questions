const Football = [
  { name: "messi", num: 36 },
  { name: "peli", num: 23 },
  { name: "Maradona", num: 33 },
  { name: "Ronaldo", num: 38 },
];

Array.prototype.myforEach = function (callback, thisArg = this) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};
Football.forEach();
Football.myforEach((item, index) => {
  console.log(item, index);
});
