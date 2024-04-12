const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.resolvecbs = [];
    this.rejectcbs = [];
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.resolvecbs.forEach((cb) => cb());
      }
    };
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.rejectcbs.forEach((cb) => cb());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    let promise2 = new Promise((resolve, reject) => {
      let resolveTask = () => {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };

      let rejectTask = () => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };

      if (this.status === FULFILLED) {
        resolveTask();
      }
      if (this.status === REJECTED) {
        rejectTask();
      }
      if (this.status === PENDING) {
        this.resolvecbs.push(resolveTask);
        this.rejectcbs.push(rejectTask);
      }
    });
    return promise2;
  }

  catch(callback) {
    return this.then(undefined, callback);
  }
  finally(callback) {
    return this.then(
      (value) => Promise.resolve(callback()).then(() => value),
      (err) =>
        Promise.resolve(callback()).then(() => {
          throw err;
        })
    );
  }

  static resolve(p) {
    if (p instanceof Promise) return p;
    if (p !== null && (typeof p === "object" || typeof p === "function")) {
      let then = p.then;
      if (typeof then === "function") {
        return new Promise((resolve, reject) => {
          then.call(p, (value) => {
            resolve(value);
          });
        });
      }
    }
    return new Promise((resolve, reject) => {
      resolve(p);
    });
  }

  static reject(p) {
    return new Promise((resolve, reject) => {
      reject(p);
    });
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      let len = promises.length,
        count = 0;
      let result = new Array(len);
      promises.forEach((p, i) => {
        Promise(p).then((res) => {
          result[i] = res;
          count++;
          if (count === len) {
            resolve(result);
          }
        }, reject);
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p) => {
        Promise(p).then(resolve, reject);
      });
    });
  }

  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      let len = promises.length,
        count = 0;
      let result = new Array(len);
      promises.forEach((p, i) => {
        Promise.resolve(p).then(
          (res) => {
            result[i] = {
              status: FULFILLED,
              value: res,
            };
            count++;
            if (count === len) resolve(result);
          },
          (err) => {
            result[i] = {
              status: REJECTED,
              reason: err,
            };
            count++;
            if (count === len) resolve(result);
          }
        );
      });
    });
  }

  static any(promises) {
    return new Promise((resolve, reject) => {
      let len = promises.length,
        count = 0;
      let result = new Array(len);
      promises.forEach((p, i) => {
        Promise.resolve(p).then(resolve, (err) => {
          result[i] = err;
          count++;
          if (count === len) {
            // reject(new AggregateError())
            // 这里用Promise测试如果全部rejected的话只会打印 AggregateError: All promises were rejected
            // https://es6.ruanyifeng.com/#docs/promise#Promise-any这里应该是有问题的
            reject("AggregateError: All promises were rejected");
          }
        });
      });
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    throw new TypeError("Chaining dected cycle in promise!");
  }
  let called;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          (err) => {
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}

let promiseAPlusTest = require("promises-aplus-tests");
Promise.defer = Promise.deferred = function () {
  let obj = {};
  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  return obj;
};

promiseAPlusTest(Promise, function (e) {
  console.log(e);
});
