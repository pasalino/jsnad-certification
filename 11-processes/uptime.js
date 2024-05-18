"use strict";
console.log("Process Uptime", process.uptime());
setTimeout(() => {
  console.log("Process Uptime", process.uptime());
}, 1000);
