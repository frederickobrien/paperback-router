import * as fs from 'fs';
import csvToJson from 'convert-csv-to-json';
import { rawData } from './raw-data.js';

const enrichedData = [];

const createGeometryCollection = (csvFile) => {
    const bookJson = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(`./routes/${csvFile}`);

    const lineString = [];
    const checkPoints = [];

    bookJson.forEach((entry, i) => {
        if (i === 0) lineString.push([entry.Longitude, entry.Latitude]);
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
            lineString.push(coords);
        }
        if (entry.CheckpointNotes !== '') {
            checkPoints.push([entry.Longitude, entry.Latitude]);
        }
    });

    const geometryCollection = {
        type: 'GeometryCollection',
        geometries: [
            {
                type: 'LineString',
                coordinates: lineString
            }
        ]
    };

    checkPoints.forEach((checkPoint) => {
        geometryCollection.geometries.push({
            type: 'Point',
            coordinates: checkPoint
        });
    });

    return geometryCollection;
};

rawData.forEach(book => {
    const csvFile = book.geoJsonFile;
    delete book.geoJsonFile;
    enrichedData.push({
        bookDetails: book,
        geometryCollection: createGeometryCollection(csvFile)
    });
});

fs.writeFileSync('./output/enriched-data.json', JSON.stringify(enrichedData));
