const net = require("net");

// Server
net
  .createServer((socket) => {
    socket.on("data", (data) => {
      socket.write("pong");
    });
    socket;
    socket.on("end", () => console.log("Good game!"));
  })
  .listen(3000);

const socket = net.connect(3000);

let times = 10;

// Pipe on writable stream
socket.pipe(process.stdout);

const interval = setInterval(() => {
  socket.write("ping");
  times--;
  if (times === 0) {
    clearInterval(interval);
    socket.end();
  }
}, 1000);
