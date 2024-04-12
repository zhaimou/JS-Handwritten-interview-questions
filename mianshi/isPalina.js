function isPalina(str){
//  if(typeof str != '[object String]'){
    //   return false
//  }
 let len = str.length
 console.log(len);
  console.log(str[3])
 for(let i = 0; i < len/2; i++){
   if(str[i] !== str[len - 1-i]){
    return false
   }
 }
return true

}

let str = "zhaimouzhenshuai"
let str1 = "shhs"

console.log(isPalina(str1))