"use strict";
function song(n) {
  let a = "bottles of water on the wall,";
  let b = "bottles of water,";
  let c = "ya’ take one down, ya’ pass it around,";
  let d = "bottles of water on the wall.";
  let e = "’cause there are no more bottles of water on the wall!";
  let f = "ya’ can’t take one down, ya’ can’t pass it around,";
  for (let i = n; i >= 0; i--) {
    if (i !== 0) {
      console.log(i + a);
      console.log(i + b);
      console.log(c);
      console.log(i + d);
    } else {
      console.log("no" + a);
      console.log("no" + b);
      console.log(f);
      console.log(e);
    }
  }
}
song(3);
