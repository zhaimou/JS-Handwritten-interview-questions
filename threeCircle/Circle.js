// let arr = new Array(99999).fill(0)
// console.time('FOR')
// for (let i = 0; i < arr.length; i++) {
// }
// console.timeEnd('FOR')
// console.time('WHILE')
// let i = 0
// while (i < arr.length) {
//     i++
// }
// console.timeEnd('WHILE')
// for in循环的bug及解决办法
// 迭代所有可枚举属性[私有,公有],按照原型链查找很耗性能
// 不能迭代 Symbol属性 
// 迭代顺序会以数字优先、公有可枚举(一般是自定义属性)属性也会进行迭代
// 问题三 可以遍历到公有中可枚举的
// object.prototype.fn = function () { }
// const obj = {
//     name: 'zhaimou',
//     age: 18,
//     [symbol('a')]: 333,
//     1: 12,
//     2: 13,
// }
// console.time('key in')
// for (let key in obj) {
//     if (!obj.hasownproperty(key)) break;
//     console.log(key)
// }
// console.log(key)
//     console.log(key);
// }
// console.log(arr1)
// console.timeend('key in')
//  if(object.getownpropertysymbols(arr))
// let arr = object.keys(obj).concat(object.getownpropertysymbols(obj))
// for (let key in arr) {
//     if (!arr.hasownproperty(key)) break;
//     console.log(arr[key])
// }
// for of 循环的底层机制
// 迭代器iterator规范 具备next方法 每次执行返回一个对象 具备value/done属性
// 对象具备可迭代行并且使用for of 循环
// let self = this, index = 0
// let arr1 = [10, 20, 30]
// arr[symbol.iterator] = function () {
//     return {
//         // 必须具备next方法 执行一次next 拿到结构中某一项的值
//         next() {
//             if (index > self.length - 1) {
//                 return {
//                     done: true,
//                     value: undefined
//                 }
//             }
//             return {
//                 value: self[index++],
//                 done: false,
//             }
//         }
//     }
// }
// console.time("for of")
// for (key of arr1)
//     console.timeend("for of")
// array.prototype._foreach = function (fn, context) {
//     let self = this
//     if (context == null || context == undefined) {
//         context == window
//     } else {
//         context = context
//         this = context
//     }
//     for (let i = 0; i < this.length; i++) {
//         let res = fn(this[i], i, this)
//     }
//     console.log(res)
// }
// let cccc = {
//     0: '29',
//     1: 'z',
//     2: '3213',
//     length: 3
// }
// cccc[symbol.iterator] = array.prototype[symbol.iterator]
// for (let value of cccc) {
//     console.log(value)
// }
// function fn(ccc, bbbb, dddd) {
//     // console.log(arguments)
//     for (let value of arguments) {
//         console.log(value)
//     }
// }
// fn(1, 23, 232)
// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (var key of object.keys(obj)) {
//     console.log(key + ": " + obj[key]);
// }
// let  obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (let key of object.keys(obj)) {
//     console.log(`${key} ':' ${obj[key]}`);
// }
//a:1 b:2 c:3//a:1 b:2 c:3
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (let key of object.keys(obj)) {
//     console.log(`${key}:${obj[key]}`);
// }
//a:1 b:2 c:3