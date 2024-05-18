process.on("message", (message) => {
  console.log("Message of son 1", message);
  process.send("hello from your son");
  process.exit();
});
