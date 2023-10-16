const { PassThrough } = require("node:stream");
const fs = require("node:fs");

const ws = fs.createWriteStream("../../output/ping.txt", { flags: "a" });
const pt = new PassThrough();

ws.on("error", (err) => {
  console.log("write stream error", err);
});

process.stdout.on("error", (err) => {
  console.log("stdout stream error", err);
});

pt.on("error", (err) => {
  console.log("PassThrough stream error", err);
});

//write anything and put enter after start module
process.stdin.pipe(pt).pipe(ws);
process.stdin.pipe(process.stdout);

setTimeout(() => {
  pt.emit("error", new Error("Gasp, timeout"));
}, 10000);
