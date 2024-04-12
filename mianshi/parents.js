// 找出元素的第n级父元素

function parents(ele,n){
   while(ele && n){
    ele = ele.parentElement ? ele.parentElement : ele.parentNode;
    n--;
   }
}


