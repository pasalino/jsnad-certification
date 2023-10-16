class CustomError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "CustomError";
  }
}

class CustomErrorWithCode extends Error {
  constructor(code = "GENERIC", ...options) {
    super(...options);
    this.name = "CustomErrorWithCode";
    this.code = code;
  }
}

const error = new Error("First Error");
const serror = new CustomErrorWithCode("CODE", "Sirst Error", { cause: error });
const customError = new CustomError("Custom message", { cause: serror });

console.error("error::", error);
console.error("custom error::", customError);

console.log("---------------");

const arrow = () => {
  throw new CustomError("Error inside arrow");
};

try {
  arrow()();
} catch (e) {
  console.error("Catch::", e);
}
