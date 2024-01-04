//Closure Concept:

function outerFunction() {
  let a = 10;
  function innerFunction() {
    let b = 20;
    console.log(`Sum: ${a + b}`);
  }
  innerFunction();
}
outerFunction();

function one(callback) {
  console.log("heloo");
  callback();
}
function theeee() {
  console.log("'ans:'");
}

one(thereee);





















// function createCounter() {
//   let count = 0;
//   function counter() {
//     count++;
//     console.log("count:", count);
//   }
//   return counter;
// }
// let increment = createCounter();
// increment();
// increment();
// increment();





