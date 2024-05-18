import events from "events";

const abort = new AbortController();
const eventEmitter = new events.EventEmitter();

setTimeout(() => eventEmitter.emit("data", { ok: "ok" }), 5000);
setTimeout(() => abort.abort("Timeout"), 3000);

try {
  const data = await events.once(eventEmitter, "data", {
    signal: abort.signal,
  });

  console.log(data);
} catch (err) {
  if (err.code !== "ABORT_ERR") throw err;
  console.log("Error in wait event", err);
}
console.log("end");
