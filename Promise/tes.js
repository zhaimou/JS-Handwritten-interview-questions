const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class selfPromise {
  constructor(exec) {
    this.status = PENDING;
    this.result = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    exec(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(result) {
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.result = result;
        this.resolveCallbacks.forEach((fn) => {
          fn(result);
        });
      }
    });
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.result = result;
        this.rejectCallbacks.forEach((fn) => {
          fn(result);
        });
      }
    });
  }
  then(onFULFILLED, onREJECTED) {
    // Promise 中的 then 方法回调参数都是可选的，当调用 then 方法未传参数时，需要给默认值
    onFULFILLED =
      typeof onFULFILLED === "function"
        ? onFULFILLED
        : (value) => {
            return value;
          };
    onREJECTED =
      typeof onREJECTED === "function"
        ? onREJECTED
        : (reason) => {
            throw reason;
          };
    const newPromise = new selfPromise((resolve, reject) => {
      const fn = (fn) => {
        try {
          const result = fn(this.result);
          if (result instanceof selfPromise) {
            result.then(
              (res) => {
                resolve(res);
              },
              (err) => {
                reject(err);
              }
            );
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      };
      if (this.status === FULFILLED) {
        setTimeout(() => {
          fn(onFULFILLED);
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          fn(onREJECTED);
        });
      }
      if (this.status === PENDING) {
        this.resolveCallbacks.push(() => {
          fn(onFULFILLED);
        });
        this.rejectCallbacks.push(() => {
          fn(onREJECTED);
        });
      }
    });
    return newPromise;
  }
  catch(onREJECTED) {
    return this.then(null, onREJECTED);
  }
  finally(onFinally) {
    return this.then(
      (value) => selfPromise.resolve(onFinally()).then(() => value),
      (reason) =>
        selfPromise.resolve(onFinally()).then(() => {
          throw reason;
        })
    );
  }
  static resolve(result) {
    return new selfPromise((resolve, reject) => {
      if (result instanceof selfPromise) {
        result.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        resolve(result);
      }
    });
  }

  static reject(result) {
    return new selfPromise((resolve, reject) => {
      reject(result);
    });
  }
  static all(promises) {
    let result = [];
    let resolveCount = 0;
    return new selfPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (res) => {
            // 记录数据
            result[i] = res;
            resolveCount++;
            if (resolveCount === promises.length) {
              resolve(result);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }
  static any(promises) {
    return new selfPromise((resolve, reject) => {
      const errors = [];
      let completedCount = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (res) => {
            resolve(res);
          },
          (err) => {
            errors.push({ index: i, err });
            completedCount++;
            if (completedCount === promises.length) {
              reject(new AggregateError(errors));
            }
          }
        );
      }
    });
  }
  static race(promises) {
    return new selfPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (res) => {
            resolve(res);
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }
  static allSettled(promises) {
    return new selfPromise((resolve) => {
      const results = [];
      let pendingCount = promises.length;
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then(
            (value) => {
              results[i] = { status: FULFILLED, value };
            },
            (reason) => {
              results[i] = { status: REJECTED, reason };
            }
          )
          .finally(() => {
            pendingCount--;
            if (pendingCount === 0) {
              resolve(results);
            }
          });
      }
    });
  }
}

// function resolvePromise(newPromise, result, resolve, reject) {
// console.log("siu");
//   if (newPromise === result) {
//     throw new Error("");
//   } else if (result instanceof selfPromise) {
//     result.then(
//       (res) => {
//         resolve(res);
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   } else {
//     resolve(result);
//   }
// }
const test = new selfPromise((resolve, reject) => {
  // reject("siu siu siu");
  resolve("666");
});
const t1 = Promise.resolve("1");
const t2 = Promise.resolve("2");
const t3 = Promise.resolve("3");
const t4 = Promise.reject("4");
selfPromise.race([t2, t1, t3, t4]).then((res) => {
  console.log(res);
});
// [
//     { status: 'fulfilled', value: '1' },
//     { status: 'fulfilled', value: '2' },
//     { status: 'fulfilled', value: '3' },
//     { status: 'rejected', reason: '4' }
//   ]
// console.log(t);
// test
//   .then()
//   .catch((rea) => {
//     console.log(rea);
//   })
//   .finally(() => {
//     console.log("123");
//   });
// test
//   .then((res) => {
//     console.log("1" + res);
//     return new selfPromise((resolve, reject) => {
//       resolve(res);
//     });
//   })
//   .then((res) => {
//     console.log(res);
//   });
// // console.log("2");
// // onResolved,onRejected 可选 Promise 中的 then 方法回调参数都是可选的，当调用 then 方法未传参数时，需要给默认值。
