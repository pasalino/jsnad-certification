const args = require("args-parser")(process.argv);

console.dir(args);

if ("help" in args || "h" in args) {
  console.log(
    "Use -h or --help to help, --test to exit graceful or use --test=value to print value"
  );
  process.exit(0);
}

if ("test" in args) {
  console.log(`Done with value ${args.test}`);
  return;
}

console.error("Error in execute command. Use -h/--help for help");
process.exit(-1);
