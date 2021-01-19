function promiseAll(promiseArr) {
  const resultArr = [];
  return new Promise((resolve, reject) => {
    if (promiseArr.length === 0){
      resolve[resultArr];
    } else {
      for (let i = 0; i < promiseArr.length; i ++) {
        promiseArr[i].then(v => {
          resultArr.push(v);
        }, reason => reject(reason))
      }
      resolve(resultArr);
    }
  })
}