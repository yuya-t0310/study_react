// 非同期処理（Promise）
// let a = 0;

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
// }).then((b) => {
//     console.log(b);
//     return b;
// }).then((b) => {
//     console.log(b);
// }).catch((c) => {
//     console.log('catchが実行', c)
// })

// await/asyncで記載
let a = 0;
async function init() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        a = 1;
        resolve(a);
      }, 2000);
    });
    console.log(result);
  } catch (e) {
    console.log("catchが実行", e);
  }
}
