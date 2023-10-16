const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", (data) => {
  console.log(`Number of files ${data}`);
});

wc.stderr.on("data", (data) => {
  console.log(`Error wc: ${data}`);
});

find.stderr.on("data", (data) => {
  console.log(`Error find: ${data}`);
});
