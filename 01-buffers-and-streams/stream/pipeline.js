const { pipeline } = require("stream");
const path = require("path");
const { createReadStream, createWriteStream } = require("fs");
const { Transform } = require("stream");

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const upperCased = chunk.toUpperCase();
      console.log("upperCased", upperCased);

      if (upperCased.includes("SITH")) {
        return next(new Error("Sith are here!", null));
      }
      next(null, upperCased);
    },
    decodeStrings: false,
    encoding: "utf8",
  });
};

pipeline(
  createReadStream(path.join(__dirname, "../../resources/lowercase.txt"), {
    encoding: "utf8",
    highWaterMark: 100,
  }),
  createUppercaseStream(),
  createWriteStream(path.join(__dirname, "../../output/uppercase.txt")),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("finished writing");
  }
);
