// Moby-Dick
var mobyDickCoordinates = [
  { lat: 40.781, lng: -73.965 }, // Manhattan Island
  { lat: 41.018, lng: -73.634 },
  { lat: 41.106, lng: -73.42 },
  { lat: 41.301, lng: -72.911 },
  { lat: 41.374, lng: -72.192 },
  { lat: 41.375, lng: -71.912 },
  { lat: 41.512, lng: -71.692 },
  { lat: 41.65, lng: -71.61 },
  { lat: 41.671, lng: -71.48 },
  { lat: 41.82, lng: -71.414 }, // Providence
  { lat: 41.818, lng: -71.381 },
  { lat: 41.765, lng: -71.237 },
  { lat: 41.681, lng: -71.121 },
  { lat: 41.636, lng: -70.934 }, // New Bedford
  { lat: 41.636, lng: -70.914 },
  { lat: 41.573, lng: -70.864 },
  { lat: 41.517, lng: -70.676 },
  { lat: 41.299, lng: -70.101 },
  { lat: 41.291, lng: -70.087 },
  { lat: 41.282, lng: -70.099 }, // Nantucket
  { lat: 41.291, lng: -70.087 },
  { lat: 41.296, lng: -70.094 },
  { lat: 41.301, lng: -70.096 },
  { lat: 41.396, lng: -70.051 },
  { lat: 39.309, lng: -32.894 },
  { lat: 38.7, lng: -30.458 }, // Azores
  { lat: 36.783, lng: -28.133 },
  { lat: 15.91, lng: -26.516 }, // Cape de Verde
  { lat: -10.737, lng: -27.431 },
  { lat: -23.236, lng: -35.6 },
  { lat: -34.151, lng: -52.065 },
  { lat: -35.591, lng: -55.906 }, // Mouth of the Rio de la Plata
  { lat: -35.759, lng: -55.162 },
  { lat: -35.621, lng: -54.239 },
  { lat: -16.252, lng: -8.31 },
  { lat: -16.31, lng: -5.709 }, // St. Helena
  { lat: -17.557, lng: -3.605 },
  { lat: -34.948, lng: 18.05 }, // Cape Town
  { lat: -45.009, lng: 45.832 },
  { lat: -45.71, lng: 51.21 }, // Crozet Islands
  { lat: -44.729, lng: 58.708 },
  { lat: -39.699, lng: 67.402 },
  { lat: -6.535, lng: 105.086 },
  { lat: -5.912, lng: 105.831 }, // Sunda Strait
  { lat: 3.518, lng: 109.506 },
  { lat: 19.758, lng: 119.645 }, // Batanes Islands
  { lat: 21.702, lng: 121.767 },
  { lat: 30.811, lng: 146.917 }, // Japanese fishing grounds
  { lat: 10.626, lng: 172.898 }, // Fin.
];

const csvString = [
  ["Latitude", "Longitude"],
  ...mobyDickCoordinates.map((item) => [item.lat, item.lng]),
]
  .map((e) => e.join(","))
  .join("\n");

console.log(csvString);
