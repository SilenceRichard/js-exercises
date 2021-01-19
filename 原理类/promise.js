/**
 * const p = new Promise((resolve, reject) => resolve(2))
 *  .then(msg => console.log(msg))
 */

class MyPromise {
  constructor(callback) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;
    this.resolveArr = [];
    this.rejectArr = [];
    callback(this.resolve, this.reject)
  }
  resolve = (value) => {
    // 
    if (this.state === 'pending') {
      // do resolve
      this.state = 'fullfiled';
      this.value = value;
      this.resolveArr.forEach(fn => {
        console.log(this.value)
        fn(this.value)
      })
      // state => fullfiled
    }
  }
  reject = (reason) => {
    //
    this.state = 'rejected';
    this.reason = reason;
    this.resolveArr.forEach(fn => fn(this.reason))
  }
  then = (onFullfiled, onRejected) => {
    //
    if (this.state === 'fullfiled') {
      onFullfiled(this.value)
    }
    if (this.state === 'rejected') {
      onRejected(this.value)
    }
    if (this.state === 'pending') {
      return new MyPromise((resolve, reject) => {
        try {
          this.resolveArr.push(value => {
            const result = onFullfiled(value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          });
          this.rejectArr.push(reason => {
            const result = onRejected(reason);
            if (result instanceof MyPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result);
            }
          })
        } catch (error) {
          reject(error)
        }
       
      })
    }
  }
}

const p = new MyPromise((resovle, reject) => {
  reject('error')
  // resovle('success')
})

p.then(v => console.log(v))