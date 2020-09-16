"use strict";
function range(s, e) {
  let a = [];
  for (let i = s; i <= e; i++) {
    a.push(i);
  }
  return a;
}
let number = range(1, 100);
for (let i = 0; i < number.length; i++) {
  if (number[i] % 5 == 0 && number[i] % 3 == 0) {
    console.log("FizzBuzz");
  } else if (number[i] % 3 == 0) {
    console.log("Fizz");
  } else if (number[i] % 5 == 0 && number[i] % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(number[i]);
  }
}
