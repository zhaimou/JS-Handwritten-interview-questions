// 数组去重
// 第一种 利用Set数据结构只能
// const res = Array.from(new Set(arr))
// const res1 = [...new Set(arr)]
// 二次for循环
const uniqueArrayFn = (arr) => {
    let len = arr.length;
    for(let i = 0;i < len ;i++){
        for(let j = i + 1; j< len;j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1)
                j--;
            }  
        }
    }
    return arr
}
let arr1 = [1,2,3,4,5,5,6]
// uniqueArrayFn(arr1)
console.log(uniqueArrayFn(arr1))
//第三种
const uniqueArrayFn2 =(arr) => {
    const newArr = []
    arr.forEach((item) => {
        if(newArr.indexOf === -1){
            newArr.push(item)
        }
    })
    return newArr
}
//第四种
const uniqueArrayFn3 = (arr)=>{
    const newArr = [];
    arr.forEach((item) => {
        if(!newArr.includes(item)){
            newArr.push(item)
        }
    })
    return newArr
}

const uniqueArrayFn4 = (arr) => {
    return arr.filter((item,index) => {
        return arr.indexOf((item)=> {
            if(index) return item
        })
    })
}
//第6种 
const uniqueArrayFn5 =() => {
    const map = new Map()
    const newArr = []
    arr.forEach((item) => {
        if(!map.has(item)){
            map.set(item,true)
            newArr.push(item)
        }
    })
}

//第7种
const uniqueArrayFn6 =(arr) => {
    const newArr =[];
    const obj = {};
    arr.forEach((item) => {
        if(!obj[item]){
            newArr.push(item)
            obj[item] = true
        }
    })
   return newArr
}

const uniqueArrayFn7 = () => {
    return arr.reduce(
        (prev,cur) => {
          return (prev.includes(cur) ? prev : [...prev,cur]),[]  
        }
    )
}
// 不过在日常开发中数组对象去重无法解决
// 还得使用老方法
const arr = [
    {a:1, b:2},
    {a:1, b:2},
    {a:1, b:2 ,c:{a: 1,b:2}},
    {b:2, a:1 ,c:{b: 2,a:1}},
    1,
    1,
    2,
    "",
    "",
]   
const isObject = (val) => typeof val === 'object' && val !== null
const equals = (val1,val2) => {
        if(!isObject(val1) || !isObject(val2)) return Object.is(val1,val2)
        if(val1 === val2) return true 
        // 如果对比数据是引用数据
        const val1Keys = Object.keys(val1)
        const val2Keys= Object.keys(val2)
        if(val1Keys.length !== val2Keys.length) return false
        for(const key of val1Keys){
            if(!val2Keys.includes(key)) return false
            // 解决循环引用
            const res = equals(val1[key],val2[key])
            if(!res) return false
        }
        return true
    }

const newArr = [...arr]
const finishArrayFn = (arr) => {
    for(let i = 0;i <arr.length ;i++){
        for(let j = i + 1; j<arr.length;j++){
            if(equals(arr[i],arr[j])){
                arr.splice(j,1);
                j--;
            }           
        }
    }
    return arr 
}
console.log(finishArrayFn(newArr))

