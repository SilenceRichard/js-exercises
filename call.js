/**
 * function bar() {
 *  console.log(this.name);
 * }
 * var foo = {
 *  name: 'Richard',
 * }
 * 
 * bar.call(foo)
 * 
 * 1. 立即调用函数
 * 等价于 var foo = {
 *  name: 'Richard',
 *  fn: funciton () {
 *    console.log(this.name)
 *  }
 * }
 * foo.fn();
 * delete foo.fn;
 * 2. 函数使用指定对象的this
 * 3. 传参 p1, p2 ,p3, p4, p5, p6...
 */
Function.prototype.myCall = function (ctx) {
  ctx.fn = this;
  var args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  eval(`ctx.fn(${args})`);
  delete ctx.fn;
}

var foo = {
  name: 'Richard',
}

function bar() {
  console.log(`My name is ${this.name}`)
}

bar.myCall(foo);