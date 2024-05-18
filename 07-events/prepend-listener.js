const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.on("my-event", () => {
  console.log("2nd");
});

ee.prependListener("my-event", () => {
  console.log("1st");
});

ee.emit("my-event");
