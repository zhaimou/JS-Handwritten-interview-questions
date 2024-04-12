function createObj(o) {
    //传入的参数o为返回实例的__porto__,也就是实例构造函数的显式原型
    function F() {} //构造函数
    F.prototype = o;
    return new F(); //返回实例
  }
//用于创建一个新对象，被创建的对象继承另一个对象(o)的原型。所以F.prototype = o;

