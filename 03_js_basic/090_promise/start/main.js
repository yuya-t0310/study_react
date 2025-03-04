// 非同期処理 Promise
let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    // resolve(a);
    reject(a);
  }, 2000);
})
  .then((b) => {
    console.log(b);
  })
  .catch(() => {
    console.log("catchが実行");
  });
