const Football = [
  { name: "messi", num: 36 },
  { name: "peli", num: 23 },
  { name: "Maradona", num: 33 },
  { name: "Ronaldo", num: 38 },
];
Array.prototype.myfill = function (value, start = 0, end) {
  if (end > this.length || !end) end = this.length;
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};
let res = [11, 22, 33, 44, 55, 66, 77, 88, , 99];
let res1 = res.join();
console.log(res1);
Football.concat();
