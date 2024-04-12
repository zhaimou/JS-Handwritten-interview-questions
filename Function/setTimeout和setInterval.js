function sleep(time) {
  while (performance.now() < time) {}
}

// console.log(performance.now());
// 间隔一秒执行一次函数
// setInterval(() => {
//   console.log("setInterval", new Date().toLocaleString());
// }, 1000);
// 一秒后只执行一次函数体代码
// setTimeout(function fn() {
//   sleep(1000);
//   console.log("setTimeout", new Date().toLocaleString());
//   setTimeout(fn, 1000);
// }, 1000);
