Array.prototype.myreduce = function (fn, initialValue) {
  const arr = initialValue;
  for (let i = 0; i < this.length; i++) {
    arr = fn(this[i], i, this);
  }
  return arr;
};
