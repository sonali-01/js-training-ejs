"use strict";
function cube(x) {
  return x * x * x;
}
function test(text, body) {
  if (body()) {
    console.log(`Passed: ${text}`);
  } else {
    console.log(`Failed: ${text}`);
  }
}
test("Testing cube of 2 returns 8", () => {
  return cube(2) === 8;
});
test("Testing cube of 2 returns 7", () => {
  return cube(2) === 7;
});
