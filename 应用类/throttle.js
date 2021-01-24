/**
 * fn 在一段时间内只触发一次
 */

function throttle(fn, threshhold) {
  var timer;
  var start = new Date().getTime();
  return function () {
    var current = new Date().getTime();
    var args = arguments;
    var ctx = this;
    clearTimeout(timer);
    if (current - start >= threshhold) {
      fn.apply(ctx, args);
      start = current;
    } else {
      timer = setTimeout(() => {
        fn.apply(ctx, args);
      }, threshhold);
    }
  }
}

var validate = throttle(function (e) {
  console.log('throttle', e.target.value);
  document.querySelector('div').innerHTML = e.target.value
}, 2000);

document.querySelector('input').addEventListener('input', validate);