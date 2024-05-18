const assert = require("assert");

const add = (a, b) => a + b;

const result = add(2, 2);
assert.equal(typeof result, "number");
assert.equal(result, "4");
assert.strictEqual(result, 4);

const obj = {
  id: 1,
  name: { first: "David", second: "Clements" },
};
// this assert will fail because they are different objects:
try {
  assert.equal(obj, {
    id: 1,
    name: { first: "David", second: "Clements" },
  });
} catch {
  console.log("this assert will fail because they are different objects");
}

assert.deepEqual(obj, {
  id: "1",
  name: { first: "David", second: "Clements" },
});

assert.deepStrictEqual(obj, {
  id: 1,
  name: { first: "David", second: "Clements" },
});

const pseudoReq = (url, cb) => {
  setTimeout(() => {
    if (url === "ht‌tp://error.com") cb(Error("network error"));
    else cb(null, Buffer.from("some data"));
  }, 300);
};

pseudoReq("ht‌tp://example.com", (err, data) => {
  assert.ifError(err);
});

pseudoReq("ht‌tp://error.com", (err, data) => {
  assert.deepStrictEqual(err, Error("network error"));
});
