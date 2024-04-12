let lengthOflongestSubstring = function(s) {
   let y = [];
   let temp = [];
   let maxs = 0; 
   if(s=='') {
    return 0 
   } 
   if(s.length == 1 ) {
    return 1
   }
   for(let i = 0 ; i < s.length ; i++) {
     if (temp.includes(s[i])){
        y.push(temp.length)
        temp.shift();
        continue;
     }else{
        temp.push(s[i])
        y.push(temp.length)
     }
   }
   for(let j = 0; j < y.length; j++){
           if(maxs <= y[j]) {
            maxs = y[j]
           }
   }
   return maxs;
}
//  给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。