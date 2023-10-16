const { pipeline, PassThrough } = require("stream");
const path = require("path");
const { createReadStream, createWriteStream } = require("fs");
const { Transform } = require("stream");

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const upperCased = chunk.toUpperCase();
      next(null, upperCased);
    },
    decodeStrings: false,
    encoding: "utf8",
  });
};

const uppercaseStream = createUppercaseStream();
const monitorStream = PassThrough({
  encoding: "utf8",
});

monitorStream.on("data", (chunk) => {
  console.log(chunk);
});

createReadStream(path.join(__dirname, "../../resources/lowercase.txt"), {
  encoding: "utf8",
  highWaterMark: 100,
})
  .pipe(uppercaseStream)
  .pipe(monitorStream);
