/**
 * function bar(age) {
 *  this.age = age;
 *  console.log(age);
 * }
 * 
 * var foo = new bar(24);
 * foo.age // 24
 * 
 * bar bar.protptype
 *  
 * ne
 * 
 * 调用构造函数bar，this绑定新对象，返回新对象
 * 若构造函数返回对象，则返回该对象
 */
function myNew(ctx) {
  var obj = Object.create(null);
  var args = Array.prototype.slice.call(arguments, 1);
  var constructor = ctx;
  obj.__proto__ = constructor.prototype;
  const result =  constructor.apply(obj, args);
  if (typeof result === 'object') {
    return result;
  }
  return obj;
}

function bar(age) {
  this.age = age;
  console.log(age);
}

var foo = myNew(bar, 25);

console.log(foo.age);