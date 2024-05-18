import { promises as fsp } from "fs";
import { resolve, join } from "path";

const folder = "../resources";
const fileName = "open.txt";
const absolutePath = resolve(join(folder, fileName));
const file = await fsp.open(absolutePath);
console.log(await file.readFile("utf-8"));
