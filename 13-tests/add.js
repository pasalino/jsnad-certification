const add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("a or b is not a number");
  }
  return a + b;
};

module.exports = {
  add,
};
