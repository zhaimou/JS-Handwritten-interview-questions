function slowclone(obj){
    let cloneobj = {}
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
        cloneobj[key] = obj[key]
    }
    }
    return cloneobj
}
// 注意：for in遍历，会遍历原型链里面的属性，所以使用hasOwnProperty排除原型链。}
// 浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝。
// 如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址。
// 即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址。
// 浅拷贝的方式：

// Object.assign
// Array.prototype.slice()
// Array.prototype.concat()
// 扩展运算符
