/**
 * 1. 返回一个新函数，运行时使用指定的this
 * 2. 支持传参，p1,p2,...,pn
 * 
 * var foo = {
 *  value: 1,
 * }
 * var bar = function(name, age) {
 *  console.log(name);
 *  console.log(age);
 *  return this.value;
 * }
 * 
 * var bindFoo = bar.bind(foo, 'Richard');
 * bindFoo('Richard', 25);
 * var newBindFoo = new bindFoo(); // 用new新创建，this指向新的变量
 */
Function.prototype.myBind = function () {
  const ctx = [].shift.call(arguments); // foo
  const args = [].slice.call(arguments);
  const self = this;
  const fn = function () {
    const newArgs = [].slice.call(arguments);
    const that = this instanceof fn ? this : ctx;
    self.apply(that, args.concat(newArgs));
  }
  return fn;
}

var foo = {
  value: 1,
}
var bar = function (name, age) {
  console.log(name);
  console.log(age);
  return this.value;
}

var bindFoo = bar.myBind(foo, 'Richard');
bindFoo(25);
var newBindFoo = new bindFoo(); // 用new新创建，this指向新的变量