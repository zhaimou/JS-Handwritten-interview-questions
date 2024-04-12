// let arr = [2, 4, 8, 6, 1, 3, 5, 7, 10, 11];
// let arr1 = [2, 4, 8, 6, 1, 3, 5, 7, 10, 11];
// let arr2 = [2, 4, 8, 6, 1, 3, 5, 7, 10, 11];
// let res = arr.sort();
// let res1 = arr1.sort((a, b) => a - b);
// let res2 = arr2.sort((a, b) => b - a);
// console.log(res);
// console.log(res1);
// console.log(res2);
// [
//   1, 10, 11, 2, 3,
//   4,  5,  6, 7, 8
// ]
// [
//   1, 2, 3,  4,  5,
//   6, 7, 8, 10, 11
// ]
// [
//   11, 10, 8, 7, 6,
//    5,  4, 3, 2, 1
// ]

function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("iceweb")) {
        resolve(url);
      } else {
        reject("请求错误");
      }
    }, 1000);
  });
}

function* getData() {
  const res1 = yield requestData("iceweb.io");
  console.log(res1);
  const res2 = yield requestData(`iceweb.org ${res1}`);
  const res3 = yield requestData(`iceweb.com ${res2}`);
  console.log(res2);
  console.log(res3);
}
getData();

function autoAsync(generator) {
  const genFn = generator();
  const { value, done } = genFn.next();
  function step(res) {
    if (done) {
      return;
    } else {
      value.then((res) => {
        step(res);
      });
    }
  }
  //   while (!done) {
  step();
  //   }
}
