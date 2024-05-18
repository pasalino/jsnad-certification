// use command node --watch --test *.test.js
const assert = require("assert");

assert(2 === 2);
assert.ok(2 === 2, "ok");

assert.equal(true, 1, "should be equal"); // use ==
assert.equal("", false, "should be equal"); // use ==
assert.equal([], false, "should be equal"); // use ==
assert.notEqual({ a: 1 }, { a: 1 }, "shouldn't be equal"); // use !=

assert.strictEqual(true, true, "should be equal"); // use ===
assert.notStrictEqual(true, 1, "should be equal"); // use ==
assert.notStrictEqual("", false, "should be equal"); // use ==
assert.notStrictEqual([], false, "should be equal"); // use ==
assert.notStrictEqual("", 1, "shouldn't be equal"); // use !==
assert.notStrictEqual([], false, "shouldn't be equal"); // use !==
assert.notStrictEqual({ a: 1 }, { a: 1 }, "should be equal"); // use !==

assert.deepEqual({ a: 1 }, { a: true }, "should be equal"); // use == for each value
assert.deepEqual({ a: "" }, { a: false }, "should be equal"); // use == for each value
assert.deepEqual({ a: undefined }, { a: null }, "should be equal"); // use == for each value
assert.notDeepEqual({ a: 1 }, { b: 1 }, "should be equal"); // use != for each value
assert.notDeepEqual({ a: undefined }, { b: null }, "should be equal"); // use != for each value

assert.deepStrictEqual({ a: 1 }, { a: 1 });
assert.deepStrictEqual({ a: { a: 1 } }, { a: { a: 1 } });
assert.deepStrictEqual({ a: { a: null } }, { a: { a: null } });
assert.notDeepStrictEqual({ a: { a: null, b: "" } }, { a: { a: null } });
assert.notDeepStrictEqual({ a: 1 }, { a: true }, "should be equal"); // use !== for each value
assert.notDeepStrictEqual({ a: "" }, { a: false }, "should be equal"); // use !== for each value
assert.notDeepStrictEqual({ a: undefined }, { a: null }, "should be equal"); // use !== for each value
assert.notDeepStrictEqual({ a: 1 }, { b: 1 }, "should be equal"); // use !== for each value
assert.notDeepStrictEqual({ a: undefined }, { b: null }, "should be equal"); // use !== for each value

assert.throws(() => {
  throw new Error("error");
});
assert.throws(() => {
  throw new Error("error");
}, new Error("error"));
assert.throws(() => {
  throw new Error("error");
}, "Error message");
try {
  assert.throws(
    () => {
      throw new Error("error");
    },
    new Error("ee"),
    "message"
  );
} catch (err) {
  console.error(
    "This generate an error in assert, because the message is different from error raised"
  );
}
assert.doesNotThrow(() => {}, "doesn't throw");

//Promise based
assert.rejects(new Promise((res, rej) => rej("error")));
assert.rejects(() => new Promise((res, rej) => rej("error")));
assert.rejects(async () => {
  throw Error("error async");
});
assert.rejects(Promise.reject(new Error("error")));
assert.rejects(Promise.reject(new Error("error")), new Error("error"), "dd");
assert.rejects(
  () =>
    new Promise(
      (res, rej) => rej(new Error("error")),
      new Error("errors"),
      "dd"
    )
);
assert
  .rejects(
    Promise.reject(new Error("error")),
    new Error("different error"),
    "message"
  )
  .catch(() =>
    console.log(
      "This generate an error in assert, because the message is different from error raised"
    )
  );

assert.doesNotReject(async () => {});
assert.doesNotReject(Promise.resolve("ok"));

//usefull for error argument in callback
assert.ifError(null);
assert.ifError(undefined);
try {
  assert.ifError(new Error("Error"));
} catch {
  console.log("raise error!");
}
try {
  assert.ifError(0);
} catch {
  console.log("raise error!");
}

let err;
(function errorFrame() {
  err = new Error("test error");
})();

(function ifErrorFrame() {
  try {
    assert.ifError(err);
  } catch (err) {
    console.log("Found error", err.message);
  }
})();

assert.doesNotMatch("I will fail", /pass/);
assert.match("I will pass", /pass/);

try {
  assert.fail();
} catch {
  console.log("Force to be throw");
}
