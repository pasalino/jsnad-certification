"use strict";
const { pipeline } = require("stream");
const { join } = require("path");
const { createReadStream, createWriteStream } = require("fs");
const { Transform } = require("stream");

const outDir = "../output";

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase();
      next(null, uppercased);
    },
  });
};

pipeline(
  createReadStream(__filename),
  createUppercaseStream(),
  createWriteStream(join(outDir, "out.txt")),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("finished writing");
  }
);
