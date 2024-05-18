"use strict";
const child = require("child_process");
// Spawn
const result = child.spawnSync(process.execPath, [
  "-e",
  `console.log('subprocess stdio output')`,
]);
console.log(result.stdout.toString());

const sp = child.spawn(process.execPath, [
  `-e`,
  `console.log('subprocess stdio output from SP1'); process.send("Hello!!!");`,
]);

console.log("Sp1 pid is", sp.pid);

sp.stdout.pipe(process.stdout);

sp.on("message", (data) => {
  console.log("SP1 message from child", data);
});

sp.on("close", (status) => {
  console.log("SP1 exit status was", status);
});

//Pass env vars
const sp2 = child.spawn(process.execPath, ["-p", "process.env"], {
  env: { HI: "HIIIII" },
});

sp2.on("spawn", () => {
  console.log("Start sp2");
});
sp2.on("exit", () => {
  console.log("Exit from sp2");
});
sp2.stdout.pipe(process.stdout);
