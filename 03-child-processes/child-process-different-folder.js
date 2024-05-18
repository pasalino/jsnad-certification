"use strict";
const { IS_CHILD } = process.env;

if (IS_CHILD) {
  console.log("Subprocess cwd:", process.cwd());
  console.log("env", process.env);
} else {
  const { parse } = require("path");
  const { root } = parse(process.cwd());
  const { spawn } = require("child_process");
  const sp = spawn(process.execPath, [__filename], {
    cwd: root,
    env: { IS_CHILD: "1" },
  });

  sp.stdout.pipe(process.stdout);
}
