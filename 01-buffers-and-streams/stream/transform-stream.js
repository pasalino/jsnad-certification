const { createGzip } = require("zlib");

const transform = createGzip();

transform.on("data", (data) => {
  console.log("gzipping data", data.toString("base64"));
});

transform.on("finish", () => {
  console.log("finish");
});
transform.on("end", () => {
  console.log("end");
});
transform.on("close", () => {
  console.log("close");
});

transform.write("first");
transform.write("second");
transform.write("third");

setTimeout(() => {
  transform.end("forth");
}, 500);
