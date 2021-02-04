// var bar = {
//   name: 'Richard',
// }
// function foo(age, age2) {
//   console.log(this.name)
//   console.log(age)
//   console.log(age2)
// }

// const bindFoo = foo.bind(bar, 25);
// bindFoo();
// // Richard
// // 25
// const newBindFoo = new bindFoo(24);
/**
 * 1. 返回一个新的函数，运行时使用指定的this
 * 2. 支持传参
 * 3. 用new可以创建新的实例，this指向实例
 */

Function.prototype.myBind = function (ctx) {
  var self = this;
  var args = [].slice.call(arguments, 1);
  var fn = function () {
    var newArgs = Array.prototype.slice.call(arguments);
    // this 是否为构造函数的实例， 如果是，则为new所创建
    var that = this instanceof fn ? this : ctx;
    self.apply(that, args.concat(newArgs));
  }
  return fn;
}

var bar = {
  name: 'Richard',
}
function foo(age, age2) {
  console.log(this.name)
  console.log(age)
  console.log(age2)
}

const bindFoo = foo.myBind(bar, 25);
bindFoo();
// Richard
// 25
const newBindFoo = new bindFoo(24);