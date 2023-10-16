const childProcess = require("child_process");

const attachEvents = (child) => {
  child.stdout.on("data", (data) => {
    console.log(`child ${child.pid}  stdout:\n${data}`);
  });

  child.stderr.on("data", (err) => {
    console.error(`child ${child.pid}  stderr:\n${err}`);
  });

  child.on("exit", function (code, signal) {
    console.log(
      `child ${child.pid} process exited with 
        code ${code} and signal ${signal}`
    );
  });
};

const child = childProcess.spawn("pwd");
attachEvents(child);
const child2 = childProcess.spawn("ls", ["-lart"]);
attachEvents(child2);
const childWithError = childProcess.spawn("ls", ["xxxxt"]);
attachEvents(childWithError);
