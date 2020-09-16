"use strict";
function power(x, y) {
  if (y === 0) {
    return 1;
  }
  if (y === 1) {
    return x;
  } else {
    return x * power(x, y - 1);
  }
}

function checkFermat(a, b, c, n) {
  let result = power(a, n) + power(b, n);
  if (result === power(c, n) && n > 2) {
    console.log("Holy smokes, Fermat was wrong!");
  } else {
    console.log("No, that doesn’t work.");
  }
}
checkFermat(2, 3, 4, 5);
