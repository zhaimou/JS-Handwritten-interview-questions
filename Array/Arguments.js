function test() {
    console.log(arguments.length)
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
// test(5, 6)
// test(0, 5, 6)
// const obj = {
//     name: 123,
//     age: 18,
// }
// const arr = new Array(99).fill(1)
// test(...arr)
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]
test(...players)