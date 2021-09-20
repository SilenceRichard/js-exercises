function Parent() {
  this.names = ['Richard'];
}

Parent.prototype.sayName = function () {
  console.log(this.names);
}

function Sub() {
  Parent.call(this);
}

Sub.prototype = new Parent();
Sub.prototype.constructor = Sub;

const ins1 = new Sub();
const ins2 = new Sub();

ins1.names.push("Emma");
ins1.sayName();
ins2.sayName();