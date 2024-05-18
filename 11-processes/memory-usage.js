"use strict";
const stats = [process.memoryUsage()];

let iterations = 5;

while (iterations--) {
  const arr = [];
  let i = 10000;
  // make the CPU do some work:
  while (i--) {
    arr.push({ [Math.random()]: Math.random() });
  }
  stats.push(process.memoryUsage());
}

console.table(stats);
