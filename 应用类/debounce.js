/**
 * 从继电器的“去弹跳”机制衍生
 * 多个信号，一次触发
 * 利用setTimeout,每次触发，都clearTimeout
 * 直到没有触发动作，执行函数
 */

function debounce(fn, delay) {
  var timer;
  return function () {
    clearTimeout(timer);
    var ctx = this;
    var args = arguments;
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay)
  }
}

var validate = debounce(function (e) {
  console.log('输入防抖', e.target.value)
  document.querySelector('div').innerHTML = e.target.value;
}, 1000)

document.querySelector('input').addEventListener('input', validate);