"use strict";
function countBs(s) {
  let l = s.length;
  let count = 0;
  for (let i = 0; i < l; i++) {
    if (s[i] === "B") {
      count = count + 1;
    }
  }
  return count;
}
function countChar(s, c) {
  let l = s.length;
  let count = 0;
  for (let i = 0; i < l; i++) {
    if (s[i] === c) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countBs("BBn"));
console.log(countChar("kakkerlak", "k"));
