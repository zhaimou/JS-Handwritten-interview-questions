let str1 = "zhaimouren123" 
String.prototype.mySlice =  function(start=0, end){
    // 边界处理
    start = start< 0 ? this.length + start : start
    end = (!end && end !==0 )? this.length : end 
    // end = end< 0 ?   
    if (start >= end ) return ''
    let str = ''
    for (let i = start; start< end ; i++) {
        str += this[i]
    } 
    return str
}
console.log(str1.mySlice(2))
// console.log(str1.myslice(-2))
// console.log(str1.myslice(-9,10))
// console.log(str1.myslice(5,1))
