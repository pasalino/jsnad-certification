"use strict";
const os = require("os");

console.log("platform", os.platform());
console.log("type", os.type());
console.log("Hostname", os.hostname());
console.log("Home dir", os.homedir());
console.log("Temp dir", os.tmpdir());
console.log("system uptime", os.uptime());
console.log("freemem", os.freemem());
console.log("totalmem", os.totalmem());
