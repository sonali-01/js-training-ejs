"use strict";
function oddsum(n) {
  let i;
  let result = 0;
  for (i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result = result + i;
    }
  }
  return result;
}
console.log(oddsum(5));
