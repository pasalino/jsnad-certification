process.on("uncaughtException", (error, origin) => {
  console.error("Unhandled exception:", error);
  console.error("Origin:", origin);
});

process.on("unhandledRejection", (e) => {
  console.error("Unhandled rejection:", e);
});

const p = Promise.reject(new Error("Async Error"));
p.then(() => console.log("Never occur"));

const main = () => {
  throw new Error("Sync Error");
};

main();
