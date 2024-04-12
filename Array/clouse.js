// function big() {
//   let message = "hello";
//   return function small() {
//     return `${message} closure`;
//   };
// }
// console.log(big()());

// function test() {
//   const a = 11;
//   return function () {
//     return `${a} closure`;
//   };
// }
// const t = test();
// console.log(t());

// function test1(fn) {
//   const b = 33;
//   fn();
// }
// const b = 22;
// function fn() {
//   console.log(`${b} closure`);
// }
// test1(fn);

// var arr = [];
// for (var i = 0; i < 3; i++) {
//   arr[i] = function () {
//     console.log(i);
//   };
// }
// arr[0]();
// arr[1]();
// arr[2]();
// var res1 = [];

// for (let i = 0; i < 3; i++) {
//   res1[i] = function () {
//     console.log(i);
//   };
// }

// res1[0]();
// res1[1]();
// res1[2]();

// var n = 0;
// function foo() {
//   var a = 2;
//   n = function () {
//     console.log(a);
//   };
// }
// foo();
// n();
// function testFn(fn) {
//   fn();
// }

// function foo() {
//   var a = 2;
//   var n = function () {
//     console.log(a);
//   };
//   testFn(n);
// }
// foo(); //2

function foo(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return foo(m, n);
    },
  };
}

var c = foo(0).fun(1);
c.fun(2);
c.fun(3);
