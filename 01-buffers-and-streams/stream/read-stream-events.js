const fs = require("fs");

const csvReadStream = fs.createReadStream("../../resources/small-csv.csv", {
  autoClose: true,
  emitClose: true,
  encoding: "utf8",
  highWaterMark: 100, //Length of chunk
});

console.log("dataRead:", csvReadStream.bytesRead);

csvReadStream.on("open", (fd) => {
  console.log("Open", fd);
});

csvReadStream.on("ready", () => {
  console.log("Ready");
});

// csvReadStream.on("readable", () => {
//   console.log("readable");
//   // Used for read new data if readable event is listened
//   csvReadStream.read();
// });

csvReadStream.on("data", (chunk) => {
  console.log("Data dataRead:", csvReadStream.bytesRead, chunk);

  // To slow-down the stream speed it working without readable event
  csvReadStream.pause();
  setTimeout(() => csvReadStream.resume(), 500);
});

csvReadStream.on("error", (err) => {
  console.log("Error", err);
});

csvReadStream.on("pause", () => {
  console.log("Pause");
});

csvReadStream.on("resume", () => {
  console.log("Resume");
});

csvReadStream.on("end", () => {
  console.log("End");
});

csvReadStream.on("close", () => {
  console.log("Close dataRead:", csvReadStream.bytesRead);
});
