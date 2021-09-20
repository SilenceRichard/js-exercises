/**
 * 1. 执行构造函数，返回一个新对象
 * 2. this指向： 如果构造函数返回对象，指向构造函数返回的对象， 否则返回新的对象
 * 3. 支持传参
 * 4. 新对象的__proto__指向构造函数的原型
 */
function myNew() {
  const constructor = [].shift.call(arguments);
  const myObj = Object.create(null);
  myObj.__proto__ = constructor.prototype;
  const result = constructor.apply(myObj, arguments);
  if (typeof result === 'object') {
    return result;
  }
  return myObj;
}

function bar(age) {
  this.age = age;
  // return {
  //   name: 'Richard'
  // }
}

const foo = myNew(bar, 25);
const foo2= new bar(25)
// console.log(foo2.name, foo2.age);
console.log(foo.age);