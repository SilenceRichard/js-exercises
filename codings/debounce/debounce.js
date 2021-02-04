/**
 * 多个信号，一次触发，直到没有触发动作，执行函数
 * @param {*} fn 
 * @param {*} wait 
 */
function debounce(fn, wait, immediate) {
  var timer = null;
  return function () {
    var self = this;
    var args = arguments;
    // 立即执行一次
    var callNow = !!!timer;
    if (immediate && callNow) {
      fn.apply(self, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, wait)
  } 
}

var validate = debounce((e) => {
  console.log(e.target.value);
  document.querySelector('div').innerHTML = e.target.value;
}, 1000, true)

document.querySelector('input').addEventListener('input', validate);