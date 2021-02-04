/**
 * function foo(age) {
 *   console.log(this.name);
 *   console.log(age);
 * }
 * var bar = {
 *  name: 'Richard'
 * }
 * 
 * var bindFoo = foo.bind(bar, 25);
 * 
 * var newBind = new bindFoo();
 * 1. 返回一个函数， 运行时使用指定的this
 * 2. 函数可以接收新的参数
 * 3. new 创建实例时，this指向改变
 */

Function.prototype.myBind = function (ctx) {
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  function fn() {
    const newArgs = Array.prototype.slice.call(arguments);
    const that = this instanceof fn ? this : ctx;
    self.apply(that, args.concat(newArgs))
  }
  return fn;
}

function foo(age) {
  console.log(this.name);
  console.log(age);
}

var bar = {
  name: 'Richard'
}

var bindFoo = foo.myBind(bar, 25)
bindFoo()

var newBind = new bindFoo();
// newBind();