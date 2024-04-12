String.prototype.firstApper = function() {
    let obj = {};
    console.log(this)
    len = this.length;
    console.log(len)
    for (let i = 0; i < len; i++) {
        if(obj[this[i]]){
            obj[i]++
        }else{
          obj[this[i]] = 1;
        }
    }
   const arr = []
    for(let key in obj){
        if(obj[key] === 1 ) {
            arr.push(key)
        }
    }
//    console.log(arr)
   return arr
}
let str= "zhaimoudsafdsa"
console.log(
 str.firstApper()
)