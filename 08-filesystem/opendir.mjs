import { opendir } from "node:fs/promises";

try {
  const dir = await opendir("./");
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      const innerDir = await opendir(dirent.path);
    }
    console.log(dirent);
  }
} catch (err) {
  console.error(err);
}
