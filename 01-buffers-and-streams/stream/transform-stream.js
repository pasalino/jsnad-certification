const { createGzip } = require("zlib");

const transform = createGzip();

transform.on("data", (data) => {
  console.log("gzipping data", data.toString("base64"));
});

transform.write("first");
transform.write("second");
transform.write("third");

setTimeout(() => {
  transform.end("forth");
}, 500);
