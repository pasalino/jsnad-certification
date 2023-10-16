const { PassThrough, pipeline } = require("node:stream");
const fs = require("node:fs");

const ws = fs.createWriteStream("../../output/ping.txt", { flags: "a" });
const pt = new PassThrough();

const handleError = (err) => {
  if (err) {
    console.error("Error in stream", err);
  } else {
    console.log("Stream end");
  }
};

//write wanything and put enter after start module
pipeline(process.stdin, pt, ws, handleError);
pipeline(process.stdin, process.stdout, handleError);

setTimeout(() => {
  pt.emit("error", new Error("Gasp, timeout"));
}, 10000);
