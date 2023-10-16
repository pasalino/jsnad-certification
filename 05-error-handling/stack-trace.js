class CustomErrorWithCode extends Error {
  constructor(code = "GENERIC", ...options) {
    super(...options);
    this.name = "CustomErrorWithCode";
    this.code = code;
  }
}

const errorFactory = (err) =>
  new CustomErrorWithCode("CS", "message", { cause: err });

const main = () => {
  const err = new Error("Err");
  throw errorFactory(err);
};

try {
  main();
} catch (e) {
  console.error("MESSAGE: ", e);
  console.log("END");
}
