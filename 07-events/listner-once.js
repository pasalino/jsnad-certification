const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.once("my-event", () => {
  console.log("my-event fired");
});
ee.emit("my-event");
ee.emit("my-event");
ee.emit("my-event");
