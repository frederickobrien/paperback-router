// Xuanzang
var xuanzangCoordinates = [
  { lat: 34.341, lng: 108.939 }, // Chang an
  { lat: 37.928, lng: 102.642 }, // Wuwei
  { lat: 40.52, lng: 95.782 }, // An-hsi
  { lat: 42.818, lng: 93.515 }, // Hami
  { lat: 42.951, lng: 89.189 }, // Turfan
  { lat: 42.062, lng: 86.57 }, // Karashahr
  { lat: 41.631, lng: 82.897 }, // Kucha
  { lat: 41.167, lng: 80.263 }, // Aksu
  { lat: 42.822, lng: 75.317 }, // Tokmok
  { lat: 41.299, lng: 69.24 }, // Tashkent
  { lat: 39.627, lng: 66.974 }, // Samarkand
  { lat: 36.728, lng: 68.868 }, // Kunduz
  { lat: 36.755, lng: 66.897 }, // Balkh
  { lat: 34.81, lng: 67.821 }, // Bamiyan
  { lat: 34.981, lng: 69.621 }, // Kapisa
  { lat: 34.419, lng: 70.472 }, // Nagaraha
  { lat: 34.015, lng: 71.524 }, // Peshawar
  { lat: 34.148, lng: 71.737 }, // Charsadda
  { lat: 35.222, lng: 72.425 }, // Mankiala
  { lat: 35.222, lng: 72.425 }, // Udyana
  { lat: 35.87, lng: 72.513 }, // Source of the Swat River
  { lat: 35.538, lng: 73.48 }, // Darel Valley
  { lat: 35.87, lng: 72.513 }, // Source of the Swat River
  { lat: 35.222, lng: 72.425 }, // Udyana
  { lat: 35.222, lng: 72.425 }, // Mankiala
  { lat: 34.016, lng: 72.433 }, // Hund
  { lat: 33.746, lng: 72.839 }, // Taxila
  { lat: 33.772, lng: 72.847 }, // Sirsukh
  { lat: 33.813, lng: 72.825 }, // Bhallar Stupa
  { lat: 33.772, lng: 72.847 }, // Sirsukh
  { lat: 34.083, lng: 74.797 }, // Srinager
  { lat: 30.933, lng: 74.622 }, // Chinabhutkti
  { lat: 31.964, lng: 77.115 }, // Kulu Valley
  { lat: 27.43, lng: 76.189 }, // Bairata
  { lat: 27.492, lng: 77.673 }, // Mathura
  { lat: 30.142, lng: 77.355 }, // Srughna
  { lat: 28.594, lng: 78.271 }, // Matipura
  { lat: 27.334, lng: 79.27 }, // Sankasya
  { lat: 26.46, lng: 80.36 }, // Kanyakubja
  { lat: 26.787, lng: 82.198 }, // Ayodhya
  { lat: 25.506, lng: 81.427 }, // Kausambi
  { lat: 26.787, lng: 82.198 }, // Ayodhya
  { lat: 27.503, lng: 82.036 }, // Sravasti
  { lat: 27.517, lng: 82.049 }, // Angulimala Stupa
  { lat: 27.654, lng: 82.993 }, // Kapilavastu
  { lat: 27.679, lng: 83.507 }, // Lumbini
  { lat: 26.739, lng: 83.886 }, // Kushinagara (Kasia)
  { lat: 25.376, lng: 83.022 }, // Sarnath
  { lat: 25.683, lng: 85.354 }, // Vaisali
  { lat: 25.594, lng: 85.137 }, // Patailputra (Patna)
  { lat: 24.696, lng: 84.986 }, // Bodh Gaya
  { lat: 25.124, lng: 85.459 }, // Nalanda
  { lat: 25.17, lng: 86.486 }, // Kingdom of Irana
  { lat: 23.044, lng: 90.07 }, // Samatata
  { lat: 26.2, lng: 92.937 }, // Assam
  { lat: 23.044, lng: 90.07 }, // Samatata
  { lat: 22.278, lng: 87.918 }, // Tamrallipti
  { lat: 21.008, lng: 84.938 }, // South Kosala
  { lat: 16.757, lng: 81.679 }, // Andhra
  { lat: 16.506, lng: 80.648 }, // Bezwada
  { lat: 16.575, lng: 80.356 }, // Amaravati Stupa
  { lat: 15.828, lng: 78.037 }, // Kurnool
  { lat: 14.651, lng: 79.32 }, // Pallavolu
  { lat: 12.834, lng: 79.703 }, // Kanchipuram
  { lat: 16.265, lng: 75.084 }, // tidying
  { lat: 19.997, lng: 73.789 }, // Nasik
  { lat: 20.551, lng: 75.703 }, // Ajanta
  { lat: 21.705, lng: 72.995 }, // Bharuch
  { lat: 22.768, lng: 73.131 }, // Malva
  { lat: 21.72, lng: 70.758 }, // Kathiawar Peninsula
  { lat: 30.157, lng: 71.524 }, // Multan
  { lat: 33.723, lng: 72.803 }, // Taxila --
  { lat: 34.015, lng: 71.524 }, // Peshawar
  { lat: 34.419, lng: 70.472 }, // Jalalabad
  { lat: 34.981, lng: 69.621 }, // Kapisa
  { lat: 34.81, lng: 67.821 }, // Bamiyan
  { lat: 36.755, lng: 66.897 }, // Balkh
  { lat: 36.728, lng: 68.868 }, // Kunduz
  { lat: 37.101, lng: 70.555 }, // Feyzabad
  { lat: 37.772, lng: 75.229 }, // Tashkurghan
  { lat: 39.467, lng: 75.993 }, // Kashgar
  { lat: 37.114, lng: 79.922 }, // Hotan
  { lat: 37.067, lng: 82.696 }, // Niya
  { lat: 38.145, lng: 85.529 }, // Qiemo
  { lat: 39.024, lng: 88.166 }, // Ruoqiang
  { lat: 40.142, lng: 94.661 }, // Dunhuang
  { lat: 40.52, lng: 95.782 }, // An-hsi --
  { lat: 37.928, lng: 102.642 }, // Wuwei
  { lat: 34.341, lng: 108.939 }, // Chang'an
];

const csvString = [
  ["Latitude", "Longitude"],
  ...xuanzangCoordinates.map((item) => [item.lat, item.lng]),
]
  .map((e) => e.join(","))
  .join("\n");

console.log(csvString);
