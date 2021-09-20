# js-exercises
js一些日常练习
# 2021大厂前端核心面试题详解

## 1. 说一下工作中解决过的比较困难的问题/说一下项目中的亮点

主要考察解决问题的能力

formtable

amap

打包优化

## 2. 你了解浏览器的事件循环吗

2.1 为什么js在浏览器中有事件循环的机制

2.2 你了解事件循环中的两种任务吗

宏任务：整体代码，setTimeout, setInterval, I/O操作

微任务：new Promise().then, MutationObserver(前端的回溯)

2.3 为什么要引入微任务的概念，只有宏任务不可以吗

宏任务 先进先出的原则执行。

2.4 Node中的事件循环和浏览器中的事件循环有什么区别

Node宏任务的执行顺序：

1. timers定时器
2. pending callback 待定回调: 执行延迟到下一个循环迭代的I/O回调
3. idle, prepare： 仅系统内部使用
4. poll： 检索新的I/O事件，执行与I/O相关的回调
5. check：执行setImmediate()回调函数
6. close callback： socket.on('close', () => {})

微任务和宏任务在node中的执行顺序：

Node v10及以前：
1. 执行完一个阶段中的所有任务
2. 执行nextTick队列里的内容
3. 执行完微任务队列的内容

Node V10以后：
和浏览器行为统一

浏览器

### coding1

宏任务/微任务代码阅读

`await`可理解为`new promise`
微任务一定要有`resolve`进行添加

```js
console.log("start");
setTimeout(() => {
  console.log("children2");
  Promise.resolve().then(() => {
    console.log("children3");
  })
}, 0);

new Promise(function (resovel, reject) {
  console.log('children4');
  setTimeout(function () {
    console.log("children5");
    resolve("children6");
  }, 0)
}).then(res => {
  console.log("children7");
  setTimeout(() => {
    console.log(res);
  }, 0)
})
```

```js
const p = function() {
  return new Promise((resolve, reject) => {
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 0)
      resolve(2)
    })
    p1.then((res) => {
      console.log(res);
    })
    console.log(3);
    resolve(4);
  })
}
```

## 事件的捕获和冒泡机制你了解多少

1. 基本概念

捕获： 自顶向下， 从window 到 target

冒泡： 自底向上， 从target到window

2. window.addEventListener监听的是什么阶段的事件

window.addEventListener('click', () => {}, boolean);

boolean 参数为 `false`， （默认）。 为冒泡阶段
参数为`true`， 为捕获阶段

3. 平常有哪些场景用到了这个机制？

事件委托

```html
 <ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
 </ul>
```
