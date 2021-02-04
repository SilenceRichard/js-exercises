/**
 * 
 */
function myNew(ctx) {
  const newO = {};
  // 调用构造函数
  // this指向 newO
  // O -> O.prototype <- __proto__ newO
  const args = Array.prototype.slice.call(arguments, 1);
  newO.__proto__ = ctx.prototype;
  const result = ctx.apply(newO, args);
  if (typeof newO === 'object') {
    return result;
  }
  return newO;
}