// use vscode profiler

var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    console.log("New Request", req.method);
    console.profile("p1");
    loop();
    allocate();
    res.end("Success");
    console.profileEnd("p1");
  })
  .listen(3000, () => console.log("Server listen on port 3000")); //the server object listens on port 8080

function loop() {
  for (let i = 0; i <= 1e6; i++) {}
}

function allocate() {
  const items = [];

  for (let i = 0; i < 1e6; i++) {
    items.push({ count: i });
  }
}
