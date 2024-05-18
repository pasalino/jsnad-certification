"use strict";
const child = require("child_process");
const path = require("path");

// Exec sync
const output = child.execSync(
  `node -e "console.log('subprocess stdio output')"`
);
console.log(output.toString());

// Error
try {
  child.execSync(`"${process.execPath}" -e "process.exit(1)"`);
} catch (err) {
  console.error("CAUGHT ERROR:", err.message);
}

// Exec file
const p = child.exec(`node ${path.join(__dirname, "files", "f.js")} `);

p.on("spawn", () => {
  console.log("spawn");
});

p.on("exit", () => {
  console.log("exit");
});

p.on("disconnect", () => {
  console.log("disconnect");
});

p.on("error", (error) => {
  console.log("error", error);
});

p.on("message", (m) => {
  console.log("message", m);
});

p.stdout.on("data", (data) => {
  console.log("from child", data);
});
