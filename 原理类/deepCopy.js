function deepCopy(obj) {
  if (typeof obj !== 'object') {
    return;
  }
  const mapObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      mapObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return mapObj;
}

const bar = {
  a: 1,
  b: 'abc',
  c: [1,2,3,4]
}

const foo = deepCopy(bar);

console.log(foo); 
console.log(Array.isArray(foo.c))