// const re = {
//   name: "reddybabu",
//   group: "bca",
// };
// console.log(re.name);
// function re(func) {
//   const name = "reddybabu";
//   func(name);
// }
// function re1(re3) {
//   console.log(re3);
// }
// re(re1);

//SetTimeout function
/*let message = "hi reddybabu";
setTimeout(() => {
  console.log(`2seconds tate process ${message}`);
}, 2000);*/

//setinterval
let count = 1;
let setintervalID = setInterval(() => {
  console.log(`reddybabu${count}`);
  count++;
  if (count > 5) {
    clearInterval(setintervalID);
    console.log("done");
  }
}, 2000);
