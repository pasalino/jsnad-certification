const fs = require("fs");

const csv = require("csvtojson");
const { Transform } = require("node:stream");
const { pipeline } = require("stream");

const inputStream = fs.createReadStream("../../resources/big-csv.csv");
const outputStream = fs.createWriteStream("../../output/big-csv.json");

const transform = new Transform({
  transform: function (planet, encoding, callback) {
    try {
      const planetObject = JSON.parse(planet);
      const transformedPlanet =
        planetObject.Year === "2021"
          ? { ...planetObject, Year: "N.D." }
          : planetObject;
      const planetString = JSON.stringify(transformedPlanet) + "\n";
      callback(null, planetString);
    } catch (err) {
      callback(err);
    }
  },
});

const csvParser = csv();

const errorHandling = (err) => {
  if (err) {
    console.log("Pipeline encountered an error:", err);
  } else {
    console.log("Pipeline completed successfully");
  }
};

// inputStream.pipe(csvParser).pipe(transform).pipe(outputStream);
pipeline(inputStream, csvParser, transform, outputStream, errorHandling);
