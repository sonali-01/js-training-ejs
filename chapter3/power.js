// if (n % 1 === 0) {
// return x * power(power(x, n / 1), 2);
//}

"use strict";
function power(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  } else {
    return x * power(x, n - 1);
  }
}
console.log(power(2, 3));
