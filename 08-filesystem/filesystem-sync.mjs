import fs from "fs";
import { resolve, join } from "path";

const folder = "../resources";
const fileName = "open.txt";
const absolutePath = resolve(join(folder, fileName));
const file = fs.openSync(absolutePath);
console.log(fs.readFileSync(file, { encoding: "utf-8" }));

const outDir = "../output";
const fileNameSync = "writeSync.txt";
fs.writeFileSync(
  join(outDir, fileNameSync),
  Buffer.from("This string is for the file", ){encoding:'utf-8'},
  { encoding: "utf-8",flag:'' }
);
