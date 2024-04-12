function chunk(arr, size = 1) { //size=1 表示如果不传size，就默认为1
   // 定义返回数组
   let result = []
   // 定义临时数组
   let temp = []
   arr.forEach(item => {
    temp.push(item)
    // 判断temp容器是否装满。
   if (temp.length === size) {
   // 装满就将临时数组push到result
   result.push(temp)
   // 置空临时数组。
   temp = []
     }
     })
    // 判断容器是否还有值。
    if (temp.length !== 0) result.push(temp)
    // 返回结果
    return result
   }
   