// Better to do this in a different language such as Python to take advantage of value caching, C++ for performance or CPython for a hybrid
// Python's math module contains the factorial function written in C which runs incredibly fast!

let num = 15;

function factorialCalculator(arg){
  let result = 1;
  for (let i=1; i<=arg; i++){
    result *= i;
  }
  return result;
}
console.log(factorialCalculator(5));
console.log(factorialCalculator(7));
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);