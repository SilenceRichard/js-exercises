function throttle(fn, wait) {
  var start = new Date().getTime();
  var timer = null;
  return function() {
    // 立即执行
    var current = new Date().getTime();
    var self = this;
    var args = arguments;
    clearTimeout(timer);
    if (current - start > wait) {
      fn.apply(self, args);
      start = current;
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args);
      }, wait)
    }
  }
}

var validate = throttle(function(e) {
  console.log('throttle', e.target.value);
  document.querySelector('div').innerHTML = e.target.value;
}, 500);

document.querySelector('input').addEventListener('input', validate);