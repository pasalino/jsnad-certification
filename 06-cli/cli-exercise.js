const process = require("node:process");

const { argv } = process;

if (argv[2] === "-h" || argv[2] === "--help") {
  console.log("Provide node cli-exercise.js test");
  process.exit(0);
}

console.log(argv);

if (!argv.includes("test")) {
  console.error("No test option provided provide -h or --help for help");
  process.exit(-1);
}

console.log("done");
