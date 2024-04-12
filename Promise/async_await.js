// generator函数
function* generator() {
  yield Promise.resolve("1");
  yield Promise.resolve("2");
  yield Promise.resolve("3");
  return Promise.resolve("4");
}
const self = generator();
const next1 = self.next();
next1.value.then((res1) => {
  console.log(res1);
  const next2 = self.next();
  next2.value.then((res2) => {
    console.log(res2);
    //...往下推
  });
});

// function getData(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(params * 2);
//     }, 1000);
//   });
// }
// async function test() {
//   const data1 = await getData(1);
//   console.log(data1);
//   const data2 = await getData(data1);
//   console.log(data2);
//   return `success ${data2}`;
// }
// const i = test();
// // console.log(test());
// // function test() {
// //   const data1 = yield getData(1);
// //   const data2 = yield getData(data1);
// //   return `success ${data2}`;
// // }
// // const g = test()
// // const next1 = g.next()
// // next1.value.then((data1) => {
// //     //  console.log{res}
// //     const next2= g.next(data1)
// //     next2.value.then(() => {
// //         g.next()
// //     })
// // })
// // return new Promise((resolve, reject) => {
// //   const gen = genFn();
// //   function step(nextF) {
// //     let next;
// //     try {
// //       next = nextFn();
// //     } catch (e) {
// //       return reject(e);
// //     }
// //     if (next.done) {
// //       return resolve(next.value);
// //     }
// //     Promise.resolve(next.value).then(
// //       function (v) {
// //         step(function () {
// //           return gen.next(v);
// //         });
// //       },
// //       function (e) {
// //         step(function () {
// //           return gen.throw(e);
// //         });
// //       }
// //     );
// //   }
// //   step(function () {
// //     return gen.next(undefined);
// //   });
// // });
