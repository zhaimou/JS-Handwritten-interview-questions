// const reg = /cat/;
// let res = reg.test("cat a good man cat");
// console.log(res);
// console.log(res[3]);
// const str = "hello, world!";
// const reg = /l/g;
// const res = str.match(reg);
// console.log(res); // 输出 ["l", "l", "l"]

// const regex = /hello/gi;
// regex.test();
// console.log(regex.source); // 输出 "hello"
// console.log(regex.flags); // 输出 "gi"
// console.log(regex.global); // 输出 true
// console.log(regex.ignoreCase); // 输出 true
// console.log(regex.multiline); // 输出 false
// console.log(regex.sticky); // 输出 false
// console.log(regex.unicode); // 输出 false
// const regex1 = /a/g;
// const str = "abcabcabc";
// let match;
// while ((match = regex1.exec(str)) !== null) {
//   console.log(`找到匹配项 "${match[0]}"，起始位置：${match.index}`);
//   console.log(`下一次匹配的起始位置：${regex1.lastIndex}`);
// }
// lastIndex 是正则表达式对象的一个实例属性，用于指示下一次匹配的起始位置。它通常与 exec() 方法一起使用，用于迭代搜索字符串中的多个匹配项。
// function testOn() {
//   let str = "onClick";
//   const isOn = (str) => /^on[a-zA-Z]/.test(str);
//   if (isOn(str)) {
//     let res = str.slice(2).toLowerCase();
//     addEventListener(res, function (event) {
//       console.log(event);
//     });
//   }
// }

// const reg = /^1[345678]\d{9}$/g;
// let res1 = reg.test("12334121289");false
// let res = reg.test("13434322602"); true
