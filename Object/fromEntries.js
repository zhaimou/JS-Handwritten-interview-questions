Object.prototype.myfromEntries = function(arr){
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i]
        obj[key] = value
    }
    return obj
}
console.log(Object.myfromEntries([['name', '林三心'], ['age', 22], ['gender', '男']]))
// 用处：跟entries相反，将键值对数组转成对象