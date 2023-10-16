const net = require("net");

// Server
net
  .createServer((socket) => {
    socket.on("data", (data) => {
      console.log(data.toString());
      socket.write("pong");
    });
    socket;
    socket.on("end", () => console.log("Good game!"));
  })
  .listen(3000);

// Client
let times = 10;
const socket = net.connect(3000);

socket.on("data", (data) => {
  console.log(data.toString());
});

const interval = setInterval(() => {
  socket.write(`ping ${times}`);
  times--;
  if (times === 0) {
    clearInterval(interval);
    socket.end();
  }
}, 1000);
