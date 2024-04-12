// 判断a是否等于b
Object.prototype.sx_is = function (x, y) {
    if (x === y) {
        // 防止 -0 和 +0
        return x !== 0 || 1 / x === 1 / y
    }

    // 防止NaN
    return x !== x && y !== y
}

const a = { name: 'zhaimou' }
const b = a
const c = { name: 'zhaimou' }

console.log(Object.sx_is(a, b)) // true
console.log(Object.sx_is(a, c)) // false