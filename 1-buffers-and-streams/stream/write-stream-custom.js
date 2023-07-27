const { Writable } = require("stream");

const data = [];

const createWriteStream = (data) => {
  return new Writable({
    objectMode: true,
    decodeStrings: true, // Setting to false will prevent strings from being converted. Default: true.
    write(chunk, enc, next) {
      console.log("Write");
      data.push(chunk);
      next();
    },
  });
};

const ws = createWriteStream(data);

ws.on("finish", () => {
  console.log("Write process finished!\n", data);
});

ws.on("close", () => {
  console.log("Write process close!\n");
});

ws.on("error", (err) => {
  console.log("Write process error!\n", err);
});

ws.write("Hello\n");
ws.write("Node.js\n");
ws.write("from\n");
ws.write("weBeetle\n");
ws.write(1);

ws.end("Nothing more to write!");
