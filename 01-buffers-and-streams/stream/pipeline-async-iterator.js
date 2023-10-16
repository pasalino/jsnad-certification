const util = require("util");
const stream = require("stream");
const pipeline = util.promisify(stream.pipeline);
const path = require("path");
const { createReadStream, createWriteStream } = require("fs");

const sr = createReadStream(
  path.join(__dirname, "../../resources/lowercase.txt"),
  {
    decodeString: true,
    encoding: "utf8",
    highWaterMark: 20,
  }
);

async function* createUppercaseStream(source) {
  for await (let chunk of source) {
    console.log(sr.bytesRead); //The stream will be read one chunk per time

    yield chunk.toString().toUpperCase();
  }
}

async function run() {
  await pipeline(
    sr,
    createUppercaseStream,
    createWriteStream(path.join(__dirname, "../../output/uppercase.txt"))
  );
}

run()
  .then(() => console.log("finished writing"))
  .catch(console.error);
