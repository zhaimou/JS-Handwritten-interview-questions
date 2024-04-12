function myinstanceOf(father, child) {
    const fp = father.prototype
    var cp = child.__proto__
    while (cp) {
        if (cp === fp) {
            return true
        }
        cp = cp.__proto__
    }
    return false
}

function instance_of(example, classFunc) {
    let classFuncPrototype = classFunc.prototype
    let exampleProto = Object.getPrototypeOf(example) // example._proto_
    while (true) {
        if (classFuncPrototype == exampleProto) {
            return true
        }
        //    Object.__proto__ 为 == null
        if (exampleProto == null) {
            return false
        }
        exampleProto = Object.getPrototypeOf(exampleProto)
    }

}
// 实例.__proto__ = 类.prototype
// function myNew (example) {
    // const obj = {}
    // example = Object.getPrototypeOf(example)
    //  example = obj.prototype

// }
// const person = mynew person()
 
function Person(name) {
    this.name = name
}
const sx2 = 'zhaimou'
const sx = new Person('zhaione')

console.log(myinstanceOf(Person, sx))
console.log(myinstanceOf(Person, sx2))
//  用处：A instanceOf B，判断A是否经过B的原型链