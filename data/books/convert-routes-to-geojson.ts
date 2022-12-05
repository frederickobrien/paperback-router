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

  const fullRoute = bookJson.map((entry, i) => {
    if (i === 0) return [entry.Longitude, entry.Latitude];
    else {
      const previousLongitude = bookJson[i - 1].Longitude;
      const latitude = entry.Latitude;
      const longitude = (entry.Longitude +=
        entry.Longitude - previousLongitude > 180
          ? -360
          : previousLongitude - entry.Longitude > 180
          ? 360
          : 0);
      const coords = [longitude, latitude];
      return coords;
    }
  });

  const geoJson = {
    type: "LineString",
    coordinates: fullRoute,
  };

  const filePath = path.join("../geojson", file.replace(".csv", ".geojson"));

  fs.writeFileSync(filePath, JSON.stringify(geoJson));
});
