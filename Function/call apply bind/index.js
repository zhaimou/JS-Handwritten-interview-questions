Function.prototype.myCall = function(thisArg,...args){
    if(typeof this !== 'function') return new Error('必须是函数调用')
    thisArg = (thisArg !==null && thisArg !== undefined) ? Object(thisArg) : thisArg
    thisArg.fn = this
    let res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}

Function.prototype.myApply= function(thisArg,args){
    if(typeof this !== 'function') return new Error('必须是函数调用')
    if(!Array.isArray(args))  return new Error('第二个参数必须为数组')
    thisArg = (thisArg !==null && thisArg !== undefined) ? Object(thisArg) : thisArg
    thisArg.fn = this
    let res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}
Function.prototype.myBind = function(thisArg,...arg1s){
    if(typeof this !== 'function') return new Error('必须是函数调用')
    thisArg = (thisArg !==null && thisArg !== undefined) ? Object(thisArg) : thisArg
    return function(...args){
         let res = thisArg.fn(...arg1s,...args)
         delete thisArg.fn
         return res
    }
}