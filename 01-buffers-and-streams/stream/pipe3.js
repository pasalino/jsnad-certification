const { PassThrough } = require("stream");

const passThrough = new PassThrough();

//write anything and put enter after start module
process.stdin.pipe(passThrough).pipe(process.stdout);
