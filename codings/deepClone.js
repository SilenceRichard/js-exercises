function deepClone(obj) {
  if (typeof obj !== 'object') {
    return;
  }
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj;
}

const foo = {
  bar: 1,
  bar1: {
    value: 2,
  }
}

const newFoo = deepClone(foo);

console.log(newFoo)

newFoo.bar1.value = 3;

console.log(foo)
console.log(newFoo)