"use strict"

function bouncingBall(h,  bounce,  window) {
let counter = 0;
  if ((h <= window) || (bounce >=1 ) || (bounce <= 0)) {
    return -1
  }

  while (h > window) {
    counter++
    h = h * bounce;
    if (h > window) {
      counter++
    }
  }
  return counter
}
