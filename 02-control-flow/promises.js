const utils = require("node:util");
// Create a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(33), 500);
});

const promise2 = new Promise((resolve, reject) => {
  reject(new Error("Promise reject"));
});

console.log("Promise pending", promise);
promise.then((data) => console.log("Promise data", data));
promise2.catch((err) => console.error("Promise Error", err));

// Finally
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Promise reject")), 500);
});

promise3
  .catch((err) => console.log("Catch error"))
  .finally(() => console.log("Finally"));

//Promisify
const wait = utils.promisify(setTimeout);

wait(100, "Wait value").then((res) => console.log("wait", res));

// Promises utils
Promise.all([
  Promise.resolve("a"),
  Promise.resolve("b"),
  Promise.resolve("c"),
]).then((res) => console.log("Promise all 1", res));

Promise.all([
  Promise.resolve("a"),
  Promise.resolve("b"),
  Promise.reject(new Error("Error promise all")),
]).catch((res) => console.error("Promise all 2", res));

Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
  Promise.reject(new Error("Error promise all")),
]).then((res) => console.log("Promise all settled", res));

Promise.race([wait(100, "100"), wait(200, "200")]).then((res) =>
  console.error("Promise race", res)
);
