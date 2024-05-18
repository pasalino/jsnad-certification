const { PassThrough } = require("stream");
const path = require("path");
const { createReadStream } = require("fs");

const monitorStream = PassThrough({
  encoding: "hex",
});

monitorStream.on("data", (chunk) => {
  console.log("Data:", chunk);
});

createReadStream(path.join(__dirname, "../../resources/lowercase.txt"), {
  encoding: "utf8",
  autoClose: true,
  highWaterMark: 20,
}).pipe(monitorStream);
