const fs = require("fs");

const ws = fs.createWriteStream("../../output/write-stream.txt", {});

ws.on("open", () => {
  console.log("Open");
});

ws.on("error", () => {
  console.log("Error");
});

ws.on("finish", () => {
  console.log("Finish");
});

ws.on("close", () => {
  console.log("Close");
});

ws.write("Hello\n");
ws.write("Node.js\n");

let i = 0;
while (ws.write("from\n")) {
  console.log("Write", ++i);
}
ws.once("drain", () => {
  console.log("Drain");
});

setTimeout(() => {
  ws.write("weBeetle\n");
  ws.end("Write process finished!");
}, 2000);
