"use strict";
function rightJustify(x) {
  let space = 70 - x.length;
  let a = "";
  for (let i = 0; i < space; i++) {
    a = " " + a;
  }
  x = a + x;
  return x;
}
console.log(rightJustify("monty"));
