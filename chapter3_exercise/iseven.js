"use strict";
//Program to check a number is even using recursive funciton
function abs(x) {
  return x > 0 ? x : -x;
}
function iseven(n) {
  let a = abs(n);
  if (a === 0) {
    return true;
  } else if (a === 1) {
    return false;
  } else {
    return iseven(a - 2);
  }
}
console.log(iseven(-2));
