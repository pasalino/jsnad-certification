var http = require("http");

console.log("Console 1");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    for (let i = 0; i < 100; i++) {
      console.log("i %d", i);
    }
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

console.log("end");
