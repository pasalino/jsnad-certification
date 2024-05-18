"use strict";
const { readdir: readdirProm } = require("fs").promises;
const path = require("path");

async function run() {
  const files = await readdirProm(path.relative(__dirname, "../"), {
    recursive: true,
  });
  console.log("promise", files);
}

run().catch((err) => {
  console.error(err);
});
