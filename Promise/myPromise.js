class MyPromise {
    constructor(callback) {
        //  初始化状态为pending
        this.status = 'pending'
        // 初始化成功状态的值
        this.value = undefined
        // 初始化失败状态的值
        this.reason = undefined
        // 定义resolve函数
        const resolve = value => {
            if (this.status === 'pending') {
                //   更新状态为resolved
                this.status = 'resolved';
                //   储存成功状态的值
                this.value = value;
            }
        }
        const reject = reason => {
            // 更新状态为rejected
            this.status = 'rejected'
            //   存储失败状态的值
            this.reason = reason
        }
        callback(resolve, reject)
    }
    then(onResolved, onRejected) {
        // 创建一个新的Promise对像
        const newPromise = new MyPromise(((resolve, reject) => {
            if (this.status === 'resolved') {
                try {
                    // 执行onResolved回调函数
                    const x = onResolved(this.value)
                    //  处理返回值
                    resolve(x)
                } catch (error) {
                    // 如果回调函数抛出异常,将异常作为失败状态的值
                    reject(error)
                }
            }
            if (this.status === 'rejected') {
                try {
                    // 执行onRejected回调函数的值   
                    const x = onRejected(this.reason)
                    //   处理返回值
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            }
        }))
    }
}
