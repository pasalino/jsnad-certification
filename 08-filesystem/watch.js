"use strict";
const { watch } = require("fs");

watch(".", (evt, filename) => {
  console.log(evt, filename);
});
