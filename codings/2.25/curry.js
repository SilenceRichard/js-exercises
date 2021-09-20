/***
 * curry.js
 * 把接收n个参数的函数转变为接收1或x个参数
 * 并返回接收余下参数并返回结果的函数
 * const add = (a, b) => a + b
 * const curryAdd = curry(add);
 * curryAdd(a)(b)
 */
function curry(fn, args) {
  const len = fn.length;
  args = args || [];
  return function () {
    const _args = Array.prototype.slice.call(arguments);
    for (let i = 0; i < _args.length; i++) {
      args.push(_args[i]);
    }
    if (args.length < len) {
      return curry.call(this, fn, args)
    } else {
      console.log(args);
      return fn.apply(this, args);
    }
  }
}

const add = (a, b, c, d) => a + b + c + d;
const curryAdd = curry(add);
const res = curryAdd(1, 3)(2)(4);

console.log(res);