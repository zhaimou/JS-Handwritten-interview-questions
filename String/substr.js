String.prototype.mysubstr = function (start = 0, length) {
  if (length < 0) return ''
  start = start < 0 ? this.length + start : start
  length = (!length && length !== 0) || length > this.length - start
    ? this.length
    : start + length
  let str = ''
  for (let i = start; start < length; i++) {
    str += this[i]
  }
  return str
}

console.log("zhaimouzhaimou".mysubstr(3, 3))