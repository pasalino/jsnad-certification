const inner = require("./inner/file");
const path = require("path");

console.log("out file:", path.join(__dirname, "out.txt"));

const relativePath = path.join("./folder", "out2.txt");

console.log("Relative path", relativePath);
console.log("isAbsolute", path.isAbsolute(relativePath));

const relativeOutput = "./output";
const pathJoin = path.join(relativePath, relativeOutput);
const pathRelative = path.relative(__dirname, relativeOutput);
console.log("join -> wrong manner", pathJoin);
console.log("relative -> to the working dir", pathRelative);

const pathResolve = path.resolve(__dirname, relativePath);
console.log("resolve", pathResolve);

console.log("filename parsed:", path.parse(__filename));
console.log("filename basename:", path.basename(__filename));
console.log("filename dirname:", path.dirname(__filename));
console.log("filename extname:", path.extname(__filename));
