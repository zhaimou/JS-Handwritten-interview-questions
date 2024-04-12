Function.prototype.sx_apply = function (obj, args) {
    obj = obj || window

    // Symbol是唯一的，防止重名key
    const fn = Symbol()
    obj[fn] = this

    // 执行，返回执行值
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

testobj.testFn.sx_apply(testobj2, [22]) // sunshine_lin22岁了



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
