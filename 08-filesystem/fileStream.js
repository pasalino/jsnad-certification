"use strict";
const { promises } = require("stream");
const { join } = require("path");
const { createReadStream, createWriteStream } = require("fs");

const outDir = "../output";
const fileNameSync = "writeSync.txt";
promises
  .pipeline(
    createReadStream(__filename),
    createWriteStream(join(outDir, fileNameSync))
  )
  .catch((p) => console.error(p));
