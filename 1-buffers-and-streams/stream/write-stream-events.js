const fs = require("fs");

const ws = fs.createWriteStream("../../output/write-stream.txt", {});

ws.on("open", () => {
  console.log("Open");
});

ws.on("pipe", (pipe) => {
  console.log("Pipe", pipe);
});

ws.on("unpipe", (unpipe) => {
  console.log("Unpipe", unpipe);
});

ws.on("error", () => {
  console.log("Error");
});

ws.on("drain", () => {
  console.log("Drain");
});

ws.on("finish", () => {
  console.log("Finish");
});

ws.on("close", () => {
  console.log("Close");
});

ws.write("Hello\n");
ws.write("Node.js\n");
ws.write("from\n");
ws.write("weBeetle\n");

ws.end("Write process finished!");
