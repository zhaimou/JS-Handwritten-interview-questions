let obj = {
    [Symbol('a')]: 1,
    a : 2,
    b: 3
}
Object.prototype.mykeys = function(obj){
   const keys = [] 
    for (const key in obj) {
           obj.hasOwnProperty(key) && keys.push(key)
        }
        return keys
    }
  const a =  Object.mykeys(obj)
  const i =  Reflect.ownKeys(obj)
//keys 用处：将对象的key转成一个数组合集
// const i = obj.hasOwnProperty('a')
console.log(i)
console.log(a)