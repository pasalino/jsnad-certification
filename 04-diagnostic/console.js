const fs = require("fs");
const path = require("node:path");

// ---- Simple use of console
console.log("hello world");
console.log("hello", "world");
console.log("hello %s", "world");
console.warn("Warning message");
console.error(new Error("Whoops, something bad happened"));

debugger;
// ---- Use class Console with custom stream
const out = fs.createWriteStream(
  path.join(__dirname, "../output/console_std.txt"),
  {
    autoClose: true,
  }
);

const err = fs.createWriteStream(
  path.join(__dirname, "../output/console_err.txt"),
  {
    autoClose: true,
  }
);

out.on("error", (err) => {
  console.log("Error on create FileStream std", err);
});

out.on("error", (err) => {
  console.log("Error on create FileStream err", err);
});

const myConsole = new console.Console({
  stdout: out,
  stderr: err,
  colorMode: false,
});

myConsole.log("hello world");
// Prints: hello world, to out
myConsole.log("hello %s", "world");
// Prints: hello world, to out
myConsole.error(new Error("Whoops, something bad happened"));
// Prints: [Error: Whoops, something bad happened], to err
const name = "Will Robinson";
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err

// --- Assert
console.assert(true, "does nothing");
// Assertion failed: Whoops didn't work
console.assert(false, "Whoops %s work", "didn't");
// Assertion failed
console.assert();

// --- Count
console.count("count1");
console.count("count2");
console.count("count2");
console.count("count1");
console.countReset("count2");
console.count("count2");

// ---- Dir
const obj = { a: "sa", b: "ba", g: { b: 5, c: 4, gg: { e: "ea" } } };
console.log(obj);
console.dir(obj, { depth: 0 });
console.dir(obj, { depth: 1 });
console.dir(obj, { depth: 2 });
console.dir(Symbol("s"));

// ---- Group
console.group("Group 1");
console.log("in group 1");
console.log("in group 1");
console.log("in group 1");
console.groupEnd();

// --- Table
console.dir(obj, { depth: 3 });
console.table(obj);

const array = [
  ["a", 5],
  ["b", 4],
];
console.table(array);

const objectArray = [
  { a: 1, b: 2 },
  { a: 1, b: 2, c: 3 },
];
console.table(objectArray);

// ---- Timer
console.time("time1");
for (i = 0; i < 100_000_000; i++) {}
console.timeLog("time1");
for (i = 0; i < 100_000_000; i++) {}
console.timeEnd("time1");

// --- Trace
const fTrace = () => {
  console.trace("Trace in func");
};
fTrace();

// --- Profile

// it use
console.profile("profileTime1");
for (i = 0; i < 100_000_000; i++) {}
console.timeStamp("profileTime1");
for (i = 0; i < 100_000_000; i++) {}
console.profileEnd("profileTime1");
//Do Nothing
console.timeStamp("profileTime1");
