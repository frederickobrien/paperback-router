const fs = require("fs");
const path = require("path");
const csvToJson = require("convert-csv-to-json");

const csvsInDir = fs
  .readdirSync("./")
  .filter((file) => path.extname(file) === ".csv");

csvsInDir.forEach((file) => {
  const bookJson = csvToJson
    .fieldDelimiter(",")
    .formatValueByType()
    .getJsonFromCsv(file);

  const fullRoute = bookJson.map((entry) => {
    const coords = [entry.Longitude, entry.Latitude];
    return coords;
  });

  const geoJson = {
    type: "LineString",
    coordinates: fullRoute,
  };

  const filePath = path.join("../geojson", file.replace(".csv", ".geojson"));

  fs.writeFileSync(filePath, JSON.stringify(geoJson));
});
