function throttle(fn,wait){
    let pre = 0 ;
    return ()=>{
        let cur =Date.now()
        if(cur-pre> wait){
            fn.apply(this,arguments)
            pre = Date.now()
        }
    }
}



    