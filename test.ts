let a: string = "hello"
let a1: string | number = 'zhaimou'
let b: number = 1;
let c: boolean = true;
let d: undefined = undefined
let d1: null = null
let e: unknown = null
let f: never  // 返回never的函数必须存在无法达到的终点 一般用于 switch中的default
const j: BigInt = 10n
const k: symbol = Symbol('hello')
let g: Function = function () { };
// 数组的定义方式
let h: Array<number | string> = [1, 2, "3"]
// 元组是已知元素数量和类型的数组,元组一定要指明类型
let h1: [string, number] = ['hello', 123,]
let h2: number[] = [1, 2, 3]
let h3: (number | string | boolean)[] = [1, 2, 3, true, 'hello', false, 'world']

const p1: { name: string, age: number } = { name: 'hello', age: 18 }
const p2: { name: string, age?: number } = { name: 'hello' }

//函数类型
function add(x: number, y: number): number { return x }
const add1: (x: number, y: number) => number = (x, y) => x + y
// 返回值void等于 可以返回undefined或不反回
const add2: (x: number, y?: number, ...arg: readonly number[]) => void = (x, y) => { return x + (y ? y : 0) }

// 枚举类型
// 枚举类型将一组可能出现的值，一个个列举，定义在一个类型中，这个类型就是枚举
enum Direction {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
}
//或者
type Direction1 = "left" | "right" | "top" | "bottom"

// interface 和type
//  定义接口
interface IPerson {
    name: string,
    age?: number
    readonly sex: string
}
interface IPerson {
    id?: number,
}
// 动态 可有可无
interface IPerson {
    [k1: number]: String
}


// 共同点 都可以约束对象的结构
// interface 只描述对象，type 则可以描述所有数据
// interface 使用 extends 来实现继承，type 使用 & 来实现交叉类型
// interface 会创建新的类型名，type 只是创建类型别名，并没有创建新类型
// interface 可以重复声明扩展，type 则不行（别名是不能重复的）
type A2 = Record<number, string> //等价于上面IPerson
// 类型别名

type IPerson1 = {
    name: string,
    age?: number,
}
// type A3 = IPerson1 & IPerson //交叉类型
const testObj: IPerson = {
    name: 'hello',
    age: 18,
    sex: 'man',
    id: 139,
    1: 'z',
    3: 'asdf',
}
const testObj1: A2 = {
    1: 'z',
}
// 继承
interface ISon extends IPerson {
    grade: string
}
const TestObj2: ISon = {
    name: 'hello',
    age: 18,
    sex: 'man',
    id: 139,
    grade: '1年级'
}
// 接口实现
// 定义的接口可以被类实现
// 之后如果需要传入接口的地方，同样也可以将类实例传入
// 这就是面向接口开发
interface B1 {
    jump: () => void
}
interface B2 {
    run: () => void
}
class C1 implements B1, B2 {
    jump() { }
    run() { }
}
const cc = new C1()
function runCc(cc: B1) {
    cc.jump()
}
runCc(cc)

type F1 = (a: number, b: number) => void
const f1: F1 = (a, b) => {
    return a + b
}
const f2: F1 = function (a, b) {
    return a + b
}
const f3 = (a: number, b: number): number => a + b
type F2 = typeof f2
f1(12, 34)
f2(12, 34)
type config = {
    url: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    data?: unknown,
    headers?: Record<string, string>
}
function request({ url, method, ...rest }: config = { url: "", method: "GET" } as config) {
    console.log(url, method, rest);
}



export default {}