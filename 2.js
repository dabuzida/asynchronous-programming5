async function run() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved ok!"), 1000);
  });
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 resolved ok!"), 0);
  });
  function delayed() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log("waiting");
        resolve(11);
      }, 1000);
    });
  }

  console.log(p1);
  console.log(promise);
  //   console.log(">>", delayed());
  let x = await delayed();
  console.log(">>", x);
  console.log(p1);
  console.log(promise);
  console.log(await promise);
}

run();
