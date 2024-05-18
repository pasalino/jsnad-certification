import { setTimeout as _setTimeout } from "timers/promises";

// Callback async cancellation
const timeout = _setTimeout(() => {
  console.log("will not be logged");
}, 1000);

setImmediate(() => {
  clearTimeout(timeout);
});

// Example of promise without cancellation
const timeoutPromise = _setTimeout(1000, "will be logged");

setImmediate(() => {
  clearTimeout(timeoutPromise); // do not do this, it don't work
});

const mainP = async () => {
  console.log(await timeoutPromise);
};

mainP().then(console.log);

// Promise cancellation

const ac = new AbortController();
const { signal } = ac;
const timeoutWithSignal = _setTimeout(1000, "will NOT be logged", { signal });

setImmediate(() => {
  ac.abort();
});

try {
  console.log(await timeoutWithSignal);
} catch (err) {
  // ignore abort errors:
  if (err.code !== "ABORT_ERR") throw err;
}
