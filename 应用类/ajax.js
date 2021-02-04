function ajax() {
  var xhr = new XMLHttpRequest();
  xhr.open('post', 'http://www.baidu.com', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        let string = xhr.responseText;
        console.log(JSON.parse(string));
      }
    }
  }
}

ajax();