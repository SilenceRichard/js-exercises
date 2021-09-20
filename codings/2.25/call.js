/**
 * 立即执行函数
 * 运行时使用指定的this
 * 支持传参，传参形式为param1， param2
 * 返回结果
 * 
 * var foo = {
 *  value: 1
 * }
 * var bar = function(name) {
 *    console.log(name);
 *    console.log(this.value)
 * }
 * bar.call(foo, 'Richard');
 */
Function.prototype.myCall = function (ctx) {
  ctx.fn = this;
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`);
  }
  const result = eval(`ctx.fn(${args})`);
  delete ctx.fn;
  return result;
}

var foo = {
  value: 1,
}

var bar = function (name) {
  console.log(name);
  return this.value;
}

var res = bar.myCall(foo, 'Richard');

console.log(res);