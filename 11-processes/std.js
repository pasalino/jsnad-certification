const process = require("process");
const { Transform, pipeline } = require("stream");

process.stdout.write("init");

const transform = new Transform({
  transform: (chunk, _, next) => {
    const upperChunk = chunk.toString().toUpperCase();
    next(null, upperChunk);
  },
  encoding: "utf-8",
});

pipeline(process.stdin, transform, process.stdout, (err) => console.log(err));
