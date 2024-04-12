function all(promises) {
  const result = [];
  let count = 0;
  return new MyPromise((resolve, reject) => {
    const addData = (index, value) => {
      result[index] = value;
      count++;
      if (count === promises.length) {
        resolve(result);
      }
    };
    promises.forEach((promise, index) => {
      if (promise instanceof MyPromise) {
        promise.then(
          (res) => {
            addData(index, res);
          },
          (err) => reject(err)
        );
      } else addData(index, promise);
    });
  });
}
// 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
// 如果所有Promise都成功，则返回成功结果数组
// 如果有一个Promise失败，则返回这个失败结果
