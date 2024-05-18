const { createGzip } = require("zlib");
const { Transform, pipeline, PassThrough } = require("node:stream");

const deferTransform = new Transform({
  transform: (chunk, encoding, next) => {
    Promise.resolve(`${chunk.toString().toUpperCase()} `).then((data) =>
      next(null, data)
    );
  },
  encoding: "utf8",
});

const ps2 = new PassThrough({ encoding: "utf8" });

ps2.on("data", (chunk) => {
  console.log("chunk", chunk);
});

const rs = PassThrough.from(["first", "second", "third", "fourth"]);
pipeline(rs, deferTransform, ps2, (err) => {
  if (err) {
    console.error("Error in pipeline");
    return;
  }
  console.log("end stream");
});
