// const arr = [1, "2", true, [3, 4], undefined, null];
// const res = arr.slice(2, 5);
// const res1 = arr.slice(7);
// console.log(res); //[ true, [ 3, 4 ], undefined ]
// console.log(res1); // []

// console.log(arr); //[ 1, '2', true, [ 3, 4 ], undefined ]

// console.log(res); // null
// // push
// const arr = [1, "2", true, [3, 4], undefined, null, Symbol("1"), BigInt(1)];
// const res = arr.push("5", "6");
// console.log(arr); //[ 1, '2', true, [ 3, 4 ], undefined, null, '5', '6' ]
// console.log(res); //8
// // pop
// const arr = [1, "2", true, [3, 4], undefined, null];
// const res = arr.pop();
// console.log(arr); //[ 1, '2', true, [ 3, 4 ], undefined ]
// console.log(res); //null
// shift
// const arr = [1, "2", true, [3, 4], undefined, null];
// const res = arr.unshift(0);
// console.log(arr); //[ 0, 1, '2', true, [ 3, 4 ], undefined, null ]
// console.log(res); // 7
// unshift
// const fruits3 = ["苹果", "香蕉"];
// const newLength = fruits3.unshift("橘子", "西瓜");
// console.log(fruits3); //[ '橘子', '西瓜', '苹果', '香蕉' ]
// console.log(newLength); //4
// slice  不改变原数组
// slice() 方法用于从数组中截取指定位置的元素，返回一个新的数组。
// 语法是：array.slice(start, end)，其中，start和end都是可选参数，表示选取的元素的起始位置和结束位置。如果不传入参数则默认选取整个数组。该方法返回的是一个新的数组，包含从start到end（不包括end）的元素。
// const names = ["张三", "李四", "王五", "赵六"];
// const slicedNames = names.slice(1, 3);
// const slicedNames1 = names.slice();
// const slicedNames2 = names.slice(0);
// const slicedNames3 = names.slice(2);
// const slicedNames4 = names.slice(3);
// const slicedNames5 = names.slice(4);
//slice不改变原数组
// console.log(names); //[ '张三', '李四', '王五', '赵六' ]
// console.log(slicedNames); //[ '李四', '王五' ]
// console.log(slicedNames1); //[ '张三', '李四', '王五', '赵六' ]
// console.log(slicedNames2); //[ '张三', '李四', '王五', '赵六' ]
// console.log(slicedNames3); //[ '王五', '赵六' ]
// console.log(slicedNames4); //[ '赵六' ]
// console.log(slicedNames5); //[] 参数大于等于4时就输出空数组
// splice 方法
// splice() 方法用于从数组中删除、替换或添加元素，并返回被删除的元素组成的数组，它会直接修改原数组。
// 语法：array.splice(start, deleteCount, item1, item2, ...)
// 其中，start表示要修改的起始位置，deleteCount表示要删除的元素个数，item1、item2等表示要添加的元素。如果deleteCount为0，则表示只添加元素，不删除元素。
// join() 方法用于将数组中的所有元素以指定的分隔符连接成一个字符串。
const arr = [1, "2", true, [3, 4], undefined, null, Symbol("a")];
const arr1 = arr.splice(1, 2, "siu", 4, 5, 8);
console.log(arr); //[ 1, 'siu', 4, 5, 8, [ 3, 4 ], undefined, null ]
console.log(arr1); //[ '2', true ]

// concat() 方法用于合并两个或多个数组，返回一个新的数组。
// js复制代码
// const fruits6 = ["苹果", "橘子"];
// const fruits7 = ["西瓜", "蓝莓"];
// const combinedFruits = fruits1.concat(fruits2);
// console.log(combinedFruits); //[ '苹果', '橘子', '西瓜', '蓝莓' ]
