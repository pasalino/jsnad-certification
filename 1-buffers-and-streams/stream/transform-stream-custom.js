const { Transform } = require("stream");
const { scrypt } = require("crypto");

const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    objectMode: false,
    encoding: "base64", //output encoding
    transform(chunk, enc, next) {
      console.log(enc);
      scrypt(chunk, "a-salt", 32, (err, key) => {
        if (err) {
          next(err);
          return;
        }
        next(null, key);
      });
    },
  });
};

const transform = createTransformStream();

transform.on("data", (data) => {
  console.log("data:", data);
});

transform.write("Hello\n", "utf-8");
transform.write("Node.js\n");
transform.write("home");
transform.write("weBeetle\n");

transform.end("Nothing more to write!");
