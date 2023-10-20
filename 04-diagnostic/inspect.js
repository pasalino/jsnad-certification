// use node --inspect file.js for execute with debugger
// use node --inspect-brk file.js for execute with breakpoint from the first line
// open chrome with chrome://inspect to execute debugging or use vscode

var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    console.log("New Request", req.method);
    console.time("handler");
    loop();
    console.timeLog("handler", "after loop");
    allocate();
    console.timeLog("handler", "after allocate");
    setTimeout(() => {
      res.end("Success");
      console.timeEnd("handler");
    }, 100);
  })
  .listen(3000, () => console.log("Server listen on port 3000")); //the server object listens on port 8080

function loop() {
  for (let i = 0; i <= 1e8; i++) {}
}

function allocate() {
  const items = [];

  for (let i = 0; i < 1e6; i++) {
    items.push({ count: i });
  }
}
