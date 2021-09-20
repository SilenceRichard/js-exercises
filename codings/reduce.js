Array.prototype.myReduce = function(callback, initialValue) {
  if (!Array.isArray(this)) {
    return;
  }
  // callback = (acc, cur, index) => {}
  let res = initialValue;
  this.forEach((item, index) => {
    res = callback(res, item, index);
  })
  return res;
}

const arr = [1, 2, 3, 4];

const acc = arr.myReduce((pre, cur, index) => cur + pre, 0);

console.log(acc);