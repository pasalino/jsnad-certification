"use strict";
const { execSync } = require("child_process");
const { exec } = require("child_process");

const output = execSync(`node -e "console.log('subprocess stdio output')"`);
console.log(output.toString());

const sp = exec(
  `"${process.execPath}" -e "console.log('subprocess stdio output')"`
);

console.log("pid is", sp.pid);

sp.stdout.pipe(process.stdout);

sp.on("close", (status) => {
  console.log("exit status was", status);
});
