let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 resolved ok!"), 0);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 resolved ok!"), 3000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 resolved ok!"), 1000);
});
// 독립적인 비동기 호출이 3개
console.log("aaaaaaaaaaa");
// for (let i = 0; i < 10000000000; i++) {}

console.log(p1);
console.log(p1.then((resolve) => resolve));
console.log(
  ">>",
  p1.then((resolve) => {
    console.log(resolve);
    return p2;
  })
);
// p1.then((resolve) => console.log(resolve));
console.log(p1);
console.log(p2);
p2.then((resolve) => console.log(resolve));
console.log(p3);
p3.then((resolve) => console.log(resolve));

// 비독립적인 비동기 호출이 1개
// p3에서 왜 1초 기다림이 없을까
// console.log("start");
// p1.then((resolve) => {
//   console.log(resolve);
//   return p2;
// })
//   .then((resolve) => {
//     console.log(resolve);
//     return p3;
//   })
//   .then((resolve) => {
//     console.log(resolve);
//     console.log("end");
//   });
