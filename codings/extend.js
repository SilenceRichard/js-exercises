function Parent() {
  this.names = ['Richard', 'James'];
}

Parent.prototype.sayName = function () {
  console.log(this.names);
}

function SubParent() {
  Parent.call(this);
}

SubParent.prototype = new Parent();
SubParent.prototype.constructor = SubParent;

const instance = new SubParent();
const instance2 = new SubParent();

instance.names.push('Clever')

instance.sayName();
instance2.sayName();