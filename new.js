/**
 * 实现一个new 函数
 * new 函数做了哪些事：
 * funtion Bar(name) {
 *   this.name = name; 
 * }
 * var instance = new Bar('Richard');
 * 1. 调用构造函数，支持传参
 * 2. 返回一个新对象
 * 3. 若构造函数返回新对象，new 返回该对象
 * 4. 若构造返回其他基本类型，new 仍返回新对象
 */

 function myNew() {
   var obj = Object.create(null);
   var fn = [].shift.call(arguments);
   var args = [].slice.call(arguments);
   var result = fn.apply(obj, args);
   if (typeof result === 'object') {
     return result;
   }
   obj.constructor = fn;
   obj.__proto__ = fn.prototype;
   return obj;
 }

 function Bar(name) {
   this.name = name;
   return {
     name: 'MOMO'
   }
 }

 var instance = myNew(Bar, 'Richard');

 console.log(instance.name);