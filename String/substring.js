String.prototype.mySunstring = function(start=0,end){
    start = start < 0 ? this.length + start : start 
    end = !end && end!==0 ? this.length : end
    if(start >= end) [start, end] = [end,start]
    let str = ''
    for (let i = start ; i < end ; i++){
        str += this[i]
    }
    return str
}
// 功能与slice大致相似 但区别之处是start与end互换值

