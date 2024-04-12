const PROMISE_PENDING_STATE = "pending";
const PROMISE_FULFILLED_STATE = "fulfilled";
const PROMISE_REJECTED_STATE = "rejected";
console.log("第一步");
class myPromise {
  //它不知道从哪来的resolve所以需要this.resolve
  //为什么需要bind 因为在外部调用resolve方法会导致this绑定全局 没有绑定实例对象
  //外部环境没有status 会报错
  constructor(exec) {
    this.status = PROMISE_PENDING_STATE;
    this.result = null;
    this.reason = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      exec(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  // resolve和reject是在最后执行的
  resolve(result) {
    setTimeout(() => {
      if (this.status == PROMISE_PENDING_STATE) {
        this.status = PROMISE_FULFILLED_STATE;
        this.result = result;
        this.resolveCallbacks.forEach((callback) => {
          callback(result);
        });
      }
    });
  }
  reject(result) {
    setTimeout(() => {
      this.status = PROMISE_REJECTED_STATE;
      this.result = result;
      this.rejectCallbacks.forEach((callback) => {
        callback(result);
      });
    });
  }
  then(onFULFILLED, onREJECTED) {
    return new myPromise((resolve, reject) => {
      onFULFILLED = typeof onFULFILLED === "function" ? onFULFILLED : () => {};
      onREJECTED = typeof onREJECTED === "function" ? onREJECTED : () => {};
      if (this.status === PROMISE_PENDING_STATE) {
        this.resolveCallbacks.push(onFULFILLED);
        this.rejectCallbacks.push(onREJECTED);
      }
      if (this.status === PROMISE_FULFILLED_STATE) {
        setTimeout(() => {
          const x = onFULFILLED(this.result);
          resolve(x);
        });
      }
      if (this.status === PROMISE_REJECTED_STATE) {
        setTimeout(() => {
          onREJECTED(this.result);
          //   resolve(x);
        });
      }
    });
  }
}

const promise = new myPromise((resolve, reject) => {
  console.log("第二步");
  //   throw new Error("测试Error");
  // 加入定时器  出现问题 如果then是pending then里面没有处理
  //   throw new Error("error");
  //   setTimeout(() => {
  // console.log(promise.status);
  resolve("siu");
  // console.log(promise.status);
  // console.log("第四部");
  //   });
});
promise
  .then(
    (res) => {
      //   console.log(promise.status);
      //   console.log(res);
      return res;
    }
    // (rea) => {
    //   console.log(rea);
    // }
  )
  .then(
    (res) => {
      console.log(res);
    },
    (rea) => {
      console.log(rea);
    }
  );
console.log("第三步");
// 实现链式功能
// 返回一个promise对象
