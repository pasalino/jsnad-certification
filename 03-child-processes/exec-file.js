const child = require("child_process");
const path = require("path");

child.execFileSync(`node ${path.join(__dirname, "files", "f.js")}`);
