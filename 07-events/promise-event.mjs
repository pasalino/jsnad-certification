import events from "events";

const eventEmitter = new events.EventEmitter();

setTimeout(() => eventEmitter.emit("data", { ok: "ok" }), 2000);

const data = await events.once(eventEmitter, "data");
console.log(data);
console.log("end");
