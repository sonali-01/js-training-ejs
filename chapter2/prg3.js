"use strict";
let b = "";
let size = 8;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      b += " ";
    } else {
      b += "#";
    }
  }
  b += "\n";
}
console.log(b);
