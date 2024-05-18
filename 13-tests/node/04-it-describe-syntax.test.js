const { it, describe } = require("node:test");
const assert = require("node:assert");
const { add } = require("../add");

describe("describe syntax", { only: false, skip: false }, () => {
  it("should be 4", () => {
    const a = 2;
    const b = 2;
    assert.strictEqual(add(a, b), 4);
  });

  it("should return error if a is not a number", () => {
    const a = "2";
    const b = 2;
    assert.throws(() => add(a, b), new TypeError("a or b is not a number"));
  });

  it("should return error if b is not a number", () => {
    const a = 2;
    const b = null;
    assert.throws(() => add(a, b), new TypeError("a or b is not a number"));
  });
});
