/**
 * Parent -> Parent.prototype
 *            | __proto__
 *     new Parent
 *  | prototype   | __proto__
 * SubParent      instance
 *     
 *  
 */
function Parent(age) {
  this.names = ['A', 'B']
  this.age = age;
}

function SubParent() {
  Parent.call(this, ...arguments);
}

SubParent.prototype = new Parent();
SubParent.prototype.constructor = SubParent;

const instance = new SubParent();
const instance2 = new SubParent();

console.log(instance.names)
instance.names.push('C');
console.log(instance.names)
