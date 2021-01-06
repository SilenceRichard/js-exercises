
/**
 * 返回一个函数体，函数运行时使用传入的第一个参数作为指定的this
 * 可传入额外的参数，传参形式与call函数一致
 * 在运行新函数时可传入额外的参数
 * 新函数有返回值
 */

var foo = {
  name: 'Richard'
}

var bar = function (sex) {
  console.log(this.name);
  console.log(sex)
  return {
    age: 25
  }
}



Function.prototype.myBind = function (ctx) {
  var self = this; // 保存当前调用函数
  var originArgs = [].slice.call(arguments, 1)
  return function () {
    var newArgs = [].slice.call(arguments);
    const result = self.apply(ctx, originArgs.concat(newArgs));
    return result;
  }
}

var bindFoo = bar.myBind(foo);

console.log(bindFoo('boy'));