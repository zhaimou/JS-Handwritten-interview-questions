Object.prototype.sx_entries = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push([key, obj[key]])
    }
    return res
}

// console.log(Object.sx_entries(obj))
// [ [ 'name', '林三心' ], [ 'age', 22 ], [ 'gender', '男' ] ]
// 用处：将对象转成键值对数组


let obj = {
    [Symbol('a')]: 1,
    a : 2,
    b: 3
}
Object.prototype.my_entries = function(obj){
    const res = [ ]
    let keys = Reflect.ownKeys(obj)
    console.log(keys)
    for (let index = 0; index < keys.length; index++){
        res.push([keys[index], obj[keys[index]]])
    }
    return res
}


console.log(Object.my_entries(obj))