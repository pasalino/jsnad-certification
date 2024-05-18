const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);
    this.name = opts.name;
  }

  destroy(err) {
    if (err) {
      this.emit("error", err);
    }
    this.emit("close");
  }
}

const emitter = new MyEmitter({ name: "Gabriele" });

emitter.on("close", () => console.log("Emitter", "close"));
emitter.on("error", (err) => console.log("Emitter", "error", err));
emitter.on("data", (d) => console.log("Emitter", "data", d));

emitter.emit("data", { d: "ss" });
emitter.emit("ev", { d: "ss" });
emitter.destroy();

const emitter2Err = new MyEmitter({ name: "ErrorEmitter" });

emitter2Err.on("close", () => console.log("ErrorEmitter", "close"));
emitter2Err.on("error", (err) => console.log("ErrorEmitter", "error", err));
emitter2Err.on("data", (d) => console.log("ErrorEmitter", "data", d));

emitter2Err.emit("data", { d: "ss" });
emitter2Err.emit("ev", { d: "ss" });
emitter2Err.destroy("Error destroy");
