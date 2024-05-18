const { Writable } = require("stream");

const data = [];

const createWriteStream = (data) => {
  return new Writable({
    objectMode: false,
    defaultEncoding: "utf-8",

    write(chunk, enc, next) {
      if (chunk.toString() === "ERROR") {
        return next("Generate error");
      }
      console.log("Write data:", chunk.toString());
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
  ws.destroy();
});

ws.write("Hello\n");
ws.write("Node.js\n");
ws.write("from\n");
ws.write("weBeetle\n");

// ws.write("ERROR");

ws.end("Nothing more to write!");
