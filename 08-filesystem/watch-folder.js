"use strict";
const { join, resolve } = require("path");
const { watch, readdirSync, statSync } = require("fs");

const cwd = resolve(".");
const files = new Set(readdirSync("."));

watch(".", (evt, filename) => {
  try {
    const { ctimeMs, mtimeMs } = statSync(join(cwd, filename));
    if (files.has(filename) === false) {
      evt = "created";
      files.add(filename);
    } else {
      if (ctimeMs === mtimeMs) evt = "content-updated";
      else evt = "status-updated";
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      files.delete(filename);
      evt = "deleted";
    } else {
      console.error(err);
    }
  } finally {
    console.log(evt, filename);
  }
});
