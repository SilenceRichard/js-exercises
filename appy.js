Function.prototype.myApply = function (ctx, argsArr) {
  ctx.fn = this;
  var args = [];
  for (let i = 0; i < argsArr.length; i++) {
    args.push(`argsArr[${i}]`)
  }
  eval(`ctx.fn(${args})`);
  delete ctx.fn;
}

var bar = function () {
  console.log(`My name is ${this.name}`)
}

var foo = {
  name: 'Richard',
}

bar.myApply(foo, ['Richard'])