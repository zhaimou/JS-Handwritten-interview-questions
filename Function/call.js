Function.prototype.mycall = function (obj, ...args) {
    obj = obj || window
    const fn = Symbol()
    obj[fn] = this
    return obj[fn](...args)
}

const testobj = {
    name: '林三心',
    testFn(age) {
        console.log(`${this.name}${age}岁了`)
    }
}
const testobj2 = {
    name: 'sunshine_lin'
}
testobj.testFn.mycall(testobj2, 22)

Function.prototype.myCall = function (context) {
    var context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}
Function.prototype.defineApply = function (context, arr) {
    var context = context || window;
    context.fn = this;
    let result;
    // 需要判断是否存在第二个参数
    // 如果存在，就将第二个参数展开
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}
