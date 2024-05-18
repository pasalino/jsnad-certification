const path = require("path");

const fork = require("child_process").fork(
  path.join(__dirname, "files", "son1.js")
);
fork.send("message");

fork.on("message", (data) => {
  console.log("from son", data);
});
