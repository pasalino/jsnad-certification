"use strict";
const { readdirSync, statSync } = require("fs");

const files = readdirSync(".", { recursive: true });

for (const name of files) {
  const stat = statSync(name);
  const typeLabel = stat.isDirectory() ? "dir: " : "file: ";
  console.log(typeLabel, name);
}

for (const name of files) {
  const stat = statSync(name);
  const typeLabel = stat.isDirectory() ? "dir: " : "file: ";
  const { atime, birthtime, ctime, mtime } = stat;
  console.group(typeLabel, name);
  console.log("atime:", atime.toLocaleString());
  console.log("ctime:", ctime.toLocaleString());
  console.log("mtime:", mtime.toLocaleString());
  console.log("birthtime:", birthtime.toLocaleString());
  console.groupEnd();
  console.log();
}
