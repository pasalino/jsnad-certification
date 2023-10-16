Promise.reject(new Error("Error")).then(() => console.log("never occur"));
console.log("never occur");
