function getSinge(fn){
    let result ;
    return function(){
        if(!result){
           result = new fn(arguments)
        }
        return result
    }
}