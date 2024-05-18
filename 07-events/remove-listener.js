const { EventEmitter } = require("events");
const ee = new EventEmitter();

const listener1 = () => {
  console.log("listener 1");
};
const listener2 = () => {
  console.log("listener 2");
};

ee.on("my-event", listener1);
ee.on("my-event", listener2);

setInterval(() => {
  ee.emit("my-event");
}, 200);

setTimeout(() => {
  ee.removeListener("my-event", listener1);
}, 500);

setTimeout(() => {
  ee.removeListener("my-event", listener2);
}, 1100);
