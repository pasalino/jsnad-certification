const { Readable } = require("stream");

//* Standard way to create Readable
const createReadStream = (options) => {
  const data = ["Hello", "Node.js", "from", "weBeetle"];
  return new Readable({
    read() {
      if (data.length === 0) this.push(null);
      else this.push(data.shift());
    },
    ...options,
  });
};

const rs = createReadStream({ encoding: "utf-8", objectMode: true });

rs.on("data", (data) => {
  console.log("Data chunk:\n", data);
});

rs.on("end", () => {
  console.log("Read is finished!");
});

//* Sugar syntax to create a ReadStream

const rsSimple = Readable.from(["Hello", "Node.js", "from", "weBeetle"]);

rsSimple.on("data", (data) => {
  console.log("Simple Data chunk:\n", data);
});
rsSimple.on("end", () => {
  console.log("Simple Read is finished!");
});
