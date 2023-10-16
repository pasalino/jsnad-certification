const fs = require("fs");
const net = require("node:net");

// Sync
try {
  throw new Error("try catch sync handler");
} catch (e) {
  console.error("Try catch handler:", e);
}

// Async Await
(async () => {
  let data;
  try {
    data = await fs.promises.readFile("a file that does not exist");
  } catch (err) {
    console.error(
      "Async Await handler: There was an error reading the file!",
      err
    );
    return;
  }
})();

// Promise
const p = Promise.reject(new Error("Promise Reject"));
p.then(() => console.log("Never occur")).catch((e) =>
  console.error("Promise handler: There is an error in this promise")
);

// Callback
fs.readFile("a file that does not exist", (err, data) => {
  if (err) {
    console.error(
      "Callback handler: There was an error reading the file!",
      err
    );
    return;
  }
  // Otherwise handle the data
});

// Event emitter
const connection = net.connect("localhost");

connection.on("error", (err) => {
  console.error("Event emitter error:", err);
});

connection.pipe(process.stdout);
