// Prototype 原型或原型对象
// 1. Prototype是数组的一个属性
// 2. Prototype是个对象
// 3.当创建函数的时候会默认添加Prototype这个属性的
// function fn(name) {
//   this.name = name;
// }
// const obj = new fn("zhaimou");

// console.dir(obj.__proto__ === fn.prototype);
// __proto__ 隐式原型
// 1.对象的属性
// 2.指向构造函数的prototype
// 3.obj.__proto__ === fn.prototype
// 原型链的最顶层是null
// console.log(fn.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);

//   obj{
//          __proto__: test.prototype = {
//          __proto:Object.prototype ={
//              __prototype  = null
//              }
//          }
//     }
// function fn() {}
// console.dir(fn);
// console.log(fn.prototype);
function fn() {}
console.log(fn.prototype.__proto__);
