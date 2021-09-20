/**
 * const p = new Promise((resolve, reject) => resolve(2))
 *  .then(msg => console.log(msg))
 */

class MyPromise {
  // const p = new Promise((resolve, reject) => {})
  // callback: (resolve, reject) => void
  constructor(callback) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;
    this.resolveStack = [];
    this.rejectedStack = [];
    const resolve = (v) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = v;
        this.resolveStack.forEach(fn => {
          fn(v);
        })
      }
    }
    const reject = (r) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = r;
        this.rejectedStack.forEach(fn => {
          fn(r);
        })
      }
    }
    callback(resolve, reject);
  }
  // then: (onFullfiled, onRejected) => Promise((resolve, reject))
  then = (onFullfiled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      try {
        if (this.state === 'fulfilled') {
          const result = onFullfiled(this.value)
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        }
        if (this.state === 'rejected') {
          const result = onRejected(this.reason);
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            reject(result);
          }
        }
        // 处理异步
        if (this.state === 'pending') {
          this.resolveStack.push((v) => {
            const result = onFullfiled(v);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          })
          this.rejectedStack.push((r) => {
            const result = onRejected(r);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              reject(r);
            }
           })
        }
      } catch (e) {
        reject(e)
      }
    })
  }
}

const p = new MyPromise((resovle, reject) => {
  console.log('execute callback');
  setTimeout(() => {
    resovle('success')
    reject('error')
  }, 0)
  resovle('success')
})

p.then(v => console.log(v), r => console.log(r))