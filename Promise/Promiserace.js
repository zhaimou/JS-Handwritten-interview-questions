function race(promises){
    return new MyPromise((resolve,reject) => {
        promises.forEach(promise=>{
            if(promise instanceof MyPromise){
                 promise.then(res=>{
                    resolve(res)
                 },err=>{
                    reject(err)
                 })
            }else{
                resolve(promise)
            }
        })
    })
}