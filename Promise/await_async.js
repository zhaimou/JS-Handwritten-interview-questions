function delay(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}
function outputColor(color) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(color);
      res();
    }, 1000);
  });
}
function outputColors() {
  console.log("Start");
  delay(1000)
    .then(() => outputColor("Red"))
    .then(() => delay(1000))
    .then(() => outputColor("Yellow"))
    .then(() => delay(1000))
    .then(() => outputColor("Blue"));
}
outputColors();

async function outputColors() {
  console.log("Start");
  await delay(1000); // 等待 1 秒钟
  console.log("Red");
  await delay(1000); // 等待 1 秒钟
  console.log("Yellow");
  await delay(1000); // 等待 1 秒钟
  console.log("Blue");
}

outputColors();
