"use strict";
const outputStats = () => {
  const uptime = process.uptime();
  const { user, system } = process.cpuUsage();
  console.log(uptime, user, system, (user + system) / 1000000);
};

outputStats();

setTimeout(() => {
  outputStats();
  const now = Date.now();
  // make the CPU do some work:
  while (Date.now() - now < 5000) {}
  outputStats();
}, 500);
