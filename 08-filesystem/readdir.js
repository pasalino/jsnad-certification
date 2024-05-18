"use strict";
const { readdirSync, readdir } = require("fs");
const { readdir: readdirProm } = require("fs").promises;

try {
  console.log("sync", readdirSync(__dirname));
} catch (err) {
  console.error(err);
}

readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("callback", files);
});

async function run() {
  const files = await readdirProm(__dirname, { recursive: true });
  console.log("promise", files);
}

run().catch((err) => {
  console.error(err);
});
