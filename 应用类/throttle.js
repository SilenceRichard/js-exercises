/**
 * fn 在一段时间内只触发一次
 */

function throttle(fn, threshhold) {
  var timer;
  var start = new Date().getTime();
  return function () {
    var cur = new Date().getTime();
    var ctx = this;
    var args = arguments;
    clearTimeout(timer);
    if (cur - start >= threshhold) {
      fn.apply(ctx, args);
      start = cur;
    } else {
      // 停止触发后执行一次
      timer = setTimeout(function () {
        fn.apply(ctx, args)
      }, threshhold);
    }
  }
}

var validate = throttle(function(e) {console.log('throttle', e.target.value);}, 2000);

document.querySelector('input').addEventListener('input', validate);