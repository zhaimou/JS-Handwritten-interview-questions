Object.prototype.myvalues = function(obj){
    const values = [ ] 
    for (const key in obj) {
    obj.hasOwnProperty(key)  && values.push(obj[key]) 
        }
        return values

    }
    //values用处：将对象的所有值转成数组合集
