const { on, EventEmitter } = require("node:events");

const emitter = new EventEmitter({ captureRejections: false });

async function readEvent() {
  try {
    for await (const value of on(emitter, "foo")) {
      console.log("Event", value);
    }
  } catch (e) {
    console.error("Error catch", e);
  }
}

emitter.on("Error", (error) => {
  console.error("Event error", error);
});

readEvent().then(() => {
  console.log("start read event");
});

let increment = 0;
const interval = setInterval(() => {
  increment++;
  emitter.emit("foo", increment);
  if (increment > 3) {
    emitter.emit("foo", new Error("Error booommmm"));
    clearInterval(interval);
  }
}, 1000);
