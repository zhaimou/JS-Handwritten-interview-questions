// console.log("Start");

// setTimeout(function () {
//   console.log("这是定时器");
// }, 0);

// new Promise((resolve, reject) => {
//   console.log("这是Promise构造函数");
//   resolve();
// }).then(() => {
//   console.log("这是Promise.Then");
// });

// console.log("End");
// 这次忽略script这个宏任务
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout1");
});
setTimeout(function () {
  console.log("setTimeout2");
  Promise.resolve().then(() => {
    console.log("then1");
  });
  Promise.resolve().then(() => {
    console.log("then2");
  });
});

async1();
new Promise((res) => {
  console.log("this is Promise");
  res();
}).then(() => {
  console.log("then3");
  setTimeout(() => {
    console.log("then3 setTimeout3");
  });
});
console.log("script end");
// script start
// async1 start
// async2
// this is Promise
// script end
// async1 end
// then3
// setTimeout1
// setTimeout2
// then1
// then2
// then3 setTimeout3
queueMicrotask(() => {});
