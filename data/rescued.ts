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

var tracksCoordinates = [
  { lat: -23.685, lng: 132.672 }, // Glen Helen tourist camp
  { lat: -23.592, lng: 132.515 }, // Redbank Gorge
  { lat: -24.073, lng: 132.269 }, // Areyonga
  { lat: -24.478, lng: 132.592 }, // Tempe Downs
  { lat: -25.3, lng: 130.737 }, // Olga
  { lat: -24.874, lng: 129.0836 }, // Docker River
  { lat: -26.0644, lng: 128.931 }, // Wingellinna
  { lat: -26.663, lng: 129.375 }, // Pipalyatjara
  { lat: -26.135, lng: 126.578 }, // Warburton
  { lat: -25.796, lng: 122.951 }, // Carnegie
  { lat: -25.274, lng: 122.027 }, // Glenayle
  { lat: -25.101, lng: 121.365 }, // Well no. 9
  { lat: -25.25, lng: 121.1 }, // Well no. 6
  { lat: -26.029, lng: 120.112 }, // Cunyu
  { lat: -25.283, lng: 116.199 }, // Dalgety Downs
  { lat: -26.175, lng: 114.808 }, // Woodleigh
  { lat: -26.2, lng: 114.198 }, // Hamelin Pool
];

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

// The Alchemist
var theAlchemistCoordinates = [
  { lat: 36.014, lng: -5.604 }, // Tarifa
  { lat: 35.759, lng: -5.833 }, // Tangier
  { lat: 34.226, lng: -4.154 },
  { lat: 30.684, lng: 4.033 },
  { lat: 28.776, lng: 21.083 },
  { lat: 29.461, lng: 30.398 }, // Faiyum Oasis
  { lat: 29.977, lng: 31.132 }, // The Pyramids
];

// The Sheltering Sky
var theShelteringSkyCoordinates = [
  { lat: 35.697, lng: -0.63 }, // Oran
  { lat: 35.889, lng: 3.148 }, // Boussif
  { lat: 35.627, lng: 3.22 },
  { lat: 35.448, lng: 2.907 },
  { lat: 35.241, lng: 3.0 },
  { lat: 34.894, lng: 3.065 },
  { lat: 34.226, lng: 2.4 }, // Ain Krorfa
  { lat: 32.463, lng: 3.601 }, // Bou Noura
  { lat: 30.599, lng: 2.887 }, // El Gaa
  { lat: 27.192, lng: 2.485 }, // Sba
  { lat: 20.257, lng: 0.991 }, // Tessalit
  { lat: 35.667, lng: -0.63 }, // Oran
];

// Lonesome Dove
var lonesomeDoveCoordinates = [
  { lat: 27.506, lng: -99.484 }, // Lonesome Dove
  { lat: 29.426, lng: -98.49 }, // San Antonio
  { lat: 30.268, lng: -97.804 }, // Austin
  { lat: 37.752, lng: -100.017 }, // Dodge City
  { lat: 41.128, lng: -101.72 }, // Ogallala
  { lat: 46.408, lng: -105.84 }, // Miles City
  { lat: 47.786, lng: -105.733 }, // Milk River Ranch
  { lat: 46.408, lng: -105.94 }, // Miles City
  { lat: 41.128, lng: -101.86 }, // Ogallala
  { lat: 39.739, lng: -104.99 }, // Denver
  { lat: 38.259, lng: -104.609 },
  { lat: 36.896, lng: -104.434 },
  { lat: 34.938, lng: -104.682 }, // Santa Rosa
  { lat: 30.268, lng: -97.904 }, // Austin
  { lat: 29.426, lng: -98.59 }, // San Antonio
  { lat: 27.506, lng: -99.489 }, // Lonesome Dove
];

// Heart of Darkness
var heartofDarknessCoordinates = [
  { lat: -6.141, lng: 12.352 }, // Outer station
  { lat: -6.075, lng: 12.819 },
  { lat: -5.93, lng: 13.359 },
  { lat: -4.919, lng: 14.674 }, // Central Station
  { lat: -4.281, lng: 15.302 },
  { lat: -4.062, lng: 15.535 },
  { lat: -3.948, lng: 15.897 },
  { lat: -3.294, lng: 16.212 },
  { lat: -2.162, lng: 16.199 },
  { lat: -1.144, lng: 17.0 },
  { lat: -1.04, lng: 17.286 },
  { lat: 0.0689, lng: 18.209 },
  { lat: 0.927, lng: 18.404 },
  { lat: 1.649, lng: 19.236 },
  { lat: 1.996, lng: 20.455 },
  { lat: 2.155, lng: 22.411 },
  { lat: 1.848, lng: 23.032 },
  { lat: 1.141, lng: 23.62 },
  { lat: 1.078, lng: 23.896 },
  { lat: 0.953, lng: 24.161 },
  { lat: 0.747, lng: 24.344 },
  { lat: 0.746, lng: 24.544 },
  { lat: 0.575, lng: 24.769 },
  { lat: 0.56, lng: 25.047 },
  { lat: 0.507, lng: 25.146 }, // Inner station
];

// Around the World in 80 Days
var eightyDaysCoordinates = [
  { lat: 51.506, lng: -0.133 }, // Reform Club
  { lat: 51.127, lng: 1.323 }, // Dover
  { lat: 50.956, lng: 1.868 }, // Calais
  { lat: 50.639, lng: 3.075 }, // Lille
  { lat: 49.114, lng: 2.719 },
  { lat: 48.88, lng: 2.355 }, // Paris (Gare de Nord)
  { lat: 48.844, lng: 2.374 }, // Paris (Gare de Lyon)
  { lat: 45.76, lng: 4.861 }, // Lyon
  { lat: 45.564, lng: 5.917 },
  { lat: 45.07, lng: 7.686 }, // Turin
  { lat: 45.485, lng: 9.204 },
  { lat: 44.505, lng: 11.343 },
  { lat: 43.942, lng: 12.457 },
  { lat: 42.469, lng: 14.203 },
  { lat: 41.465, lng: 15.553 },
  { lat: 40.632, lng: 17.941 }, // Brindisi
  { lat: 40.372, lng: 18.594 },
  { lat: 37.215, lng: 20.335 },
  { lat: 34.402, lng: 24.147 },
  { lat: 31.539, lng: 32.231 },
  { lat: 31.274, lng: 32.328 }, // Port Said
  { lat: 29.925, lng: 32.553 }, // Suez
  { lat: 29.116, lng: 32.761 },
  { lat: 12.2, lng: 43.698 },
  { lat: 11.863, lng: 44.11 },
  { lat: 11.809, lng: 44.522 },
  { lat: 12.785, lng: 45.018 },
  { lat: 19.075, lng: 72.877 }, // Bombay
  { lat: 25.435, lng: 81.846 },
  { lat: 22.572, lng: 88.363 }, // Calcutta
  { lat: 21.592, lng: 87.885 },
  { lat: 13.549, lng: 94.394 },
  { lat: 2.671, lng: 100.997 },
  { lat: 1.104, lng: 103.601 },
  { lat: 1.327, lng: 104.364 },
  { lat: 2.664, lng: 107.067 },
  { lat: 22.283, lng: 114.158 }, // Victoria, Hong Kong
  { lat: 21.912, lng: 116.174 },
  { lat: 24.886, lng: 120.179 },
  { lat: 29.707, lng: 123.101 },
  { lat: 30.987, lng: 122.546 },
  { lat: 31.23, lng: 121.473 }, // Shanghai
  { lat: 30.902, lng: 130.657 },
  { lat: 31.212, lng: 131.783 },
  { lat: 34.511, lng: 138.891 },
  { lat: 35.16, lng: 139.749 },
  { lat: 35.315, lng: 139.759 },
  { lat: 35.443, lng: 139.638 }, // Yokohama
  { lat: 35.315, lng: 139.759 },
  { lat: 35.16, lng: 139.749 },
  { lat: 34.942, lng: 139.7 },
  { lat: 34.813, lng: 139.923 },
  { lat: 37.774, lng: -122.419 }, // San Francisco
  { lat: 37.808, lng: -122.309 }, // Oakland
  { lat: 37.827, lng: -122.291 },
  { lat: 37.84, lng: -122.292 },
  { lat: 37.895, lng: -122.309 },
  { lat: 37.92, lng: -122.331 },
  { lat: 37.936, lng: -122.353 }, // Richmond
  { lat: 38.543, lng: -121.737 }, // Davis
  { lat: 38.584, lng: -121.5 }, // Sacramento
  { lat: 38.75, lng: -121.286 }, // Roseville
  { lat: 39.099, lng: -120.952 }, // Colfax
  { lat: 39.327, lng: -120.185 }, // Truckee
  { lat: 39.528, lng: -119.811 }, // Reno
  { lat: 40.968, lng: -117.732 }, // Winnemucca
  { lat: 40.836, lng: -115.75 }, // Elko
  { lat: 40.761, lng: -111.908 }, // Salt Lake City
  { lat: 41.895, lng: -106.204 }, // Medicine Bow
  { lat: 41.252, lng: -95.997 }, // Omaha
  { lat: 41.056, lng: -94.361 }, // Creston
  { lat: 41.037, lng: -93.764 }, // Osceola
  { lat: 41.018, lng: -92.414 }, // Ottumwa
  { lat: 40.971, lng: -91.55 }, // Mt. Pleasant
  { lat: 40.805, lng: -91.101 },
  { lat: 40.889, lng: -90.467 },
  { lat: 40.944, lng: -90.363 }, // Galesburg
  { lat: 41.385, lng: -89.466 }, // Princeton
  { lat: 41.779, lng: -88.145 }, // Naperville
  { lat: 41.878, lng: -87.629 }, // Chicago
  { lat: 41.772, lng: -87.63 },
  { lat: 41.609, lng: -87.431 },
  { lat: 41.595, lng: -86.931 },
  { lat: 41.707, lng: -86.546 },
  { lat: 41.678, lng: -86.287 }, // South Bend
  { lat: 41.68, lng: -85.971 }, // Elkhart
  { lat: 41.431, lng: -85.025 }, // Waterloo
  { lat: 41.638, lng: -83.541 }, // Toledo
  { lat: 41.44, lng: -82.718 }, // Sandusky
  { lat: 41.37, lng: -82.096 }, // Elyria
  { lat: 41.505, lng: -81.696 }, // Cleveland
  { lat: 40.921, lng: -81.092 }, // Alliance
  { lat: 40.444, lng: -79.992 }, // Pittsburgh
  { lat: 40.304, lng: -79.546 }, // Greensburg
  { lat: 40.514, lng: -78.401 }, // Altoona
  { lat: 40.483, lng: -78.011 }, // Huntingdon
  { lat: 40.0195, lng: -75.621 }, // Exton
  { lat: 40.042, lng: -75.483 }, // Paoli
  { lat: 40.218, lng: -74.754 }, // Trenton
  { lat: 40.734, lng: -74.164 }, // Newark Penn
  { lat: 40.75, lng: -73.993 }, // New York City
  { lat: 40.767, lng: -73.996 }, // NYC ship terminal
  { lat: 40.767, lng: -74.008 },
  { lat: 40.629, lng: -74.057 },
  { lat: 40.519, lng: -73.99 },
  { lat: 40.4, lng: -73.38 },
  { lat: 51.31, lng: -9.236 },
  { lat: 51.718, lng: -8.243 },
  { lat: 51.838, lng: -8.274 },
  { lat: 51.85, lng: -8.294 }, // Cobh
  { lat: 51.848, lng: -8.3 }, // Cobh railway station
  { lat: 53.346, lng: -6.294 }, // Dublin Heuston
  { lat: 53.351, lng: -6.274 },
  { lat: 53.349, lng: -6.197 }, // Dublin ship terminal
  { lat: 53.465, lng: -4.699 },
  { lat: 53.443, lng: -3.005 }, // Liverpool ship terminal
  { lat: 53.404, lng: -2.98 }, // Liverpool railway station
  { lat: 51.528, lng: -0.133 }, // Euston Station
  { lat: 51.506, lng: -0.133 }, // Reform club
];

// On the Road
var ontheRoadCoordinates = [
  { lat: 40.916, lng: -74.171 }, //Paterson, New Jersey
  { lat: 40.726, lng: -74.011 }, //Holland Tunnel
  { lat: 41.056, lng: -75.322 },
  { lat: 40.986, lng: -76.719 },
  { lat: 41.066, lng: -78.466 },
  { lat: 41.152, lng: -80.675 },
  { lat: 41.213, lng: -80.71 },
  { lat: 41.748, lng: -80.71 },
  { lat: 41.865, lng: -80.789 }, //Ashtabula, Ohio
  { lat: 41.474, lng: -81.693 },
  { lat: 41.336, lng: -82.758 },
  { lat: 41.59, lng: -83.641 },
  { lat: 41.678, lng: -86.692 },
  { lat: 41.59, lng: -86.896 },
  { lat: 41.612, lng: -87.48 },
  { lat: 41.878, lng: -87.64 }, //Union Station, Chicago
  { lat: 41.525, lng: -88.081 }, //Joliet, Illinois
  { lat: 41.523, lng: -90.577 }, //Davenport, Iowa
  { lat: 41.661, lng: -91.53 }, //Iowa City, Iowa
  { lat: 41.6, lng: -93.609 }, //Des Moines, Iowa
  { lat: 41.614, lng: -94.017 }, //Adel, Iowa
  { lat: 41.503, lng: -94.318 }, //Stuart, Iowa
  { lat: 41.261, lng: -95.86 }, //Council Bluffs, Iowa
  { lat: 41.252, lng: -95.997 }, //Omaha, Nebraska
  { lat: 40.926, lng: -98.342 }, //Grand Island, Nebraska
  { lat: 40.779, lng: -98.73 }, //Shelton, Nebraska
  { lat: 40.927, lng: -100.16 }, //Gothenburg, Nebraska
  { lat: 41.14, lng: -100.76 }, //North Platte, Nebraska
  { lat: 41.128, lng: -101.72 }, //Ogallala, Nebraska
  { lat: 41.139, lng: -104.82 }, //Cheyenne, Wyoming
  { lat: 40.167, lng: -105.101 }, //Longmont, Colorado
  { lat: 39.789, lng: -104.99 }, //Denver, Colorado
  { lat: 41.095, lng: -105.199 },
  { lat: 41.703, lng: -107.756 }, //Creston, Wyoming
  { lat: 41.583, lng: -109.251 },
  { lat: 40.76, lng: -111.891 }, //Salt Lake City, Utah
  { lat: 40.745, lng: -114.101 },
  { lat: 41.077, lng: -114.567 },
  { lat: 41.085, lng: -115.262 },
  { lat: 40.635, lng: -116.945 }, //  Battle Mountain
  { lat: 40.657, lng: -116.958 },
  { lat: 41.026, lng: -117.588 },
  { lat: 40.875, lng: -117.937 },
  { lat: 40.683, lng: -118.061 },
  { lat: 40.604, lng: -118.248 },
  { lat: 39.613, lng: -119.218 },
  { lat: 39.529, lng: -119.813 }, //Reno, Nevada
  { lat: 39.327, lng: -120.183 }, //Truckee, California
  { lat: 39.297, lng: -120.673 }, //  Emigrant Gap
  { lat: 39.132, lng: -120.934 },
  { lat: 38.581, lng: -121.494 }, //Sacramento, California
  { lat: 37.827, lng: -122.295 }, //Oakland Bay Bridge, California
  { lat: 37.774, lng: -122.419 }, //San Francisco, California
  { lat: 37.859, lng: -122.485 }, //Sausalito, California
  { lat: 37.906, lng: -122.544 }, //Mill Valley, California
  { lat: 37.804, lng: -122.271 }, //Oakland, California
  { lat: 37.739, lng: -121.425 }, //Tracy, California
  { lat: 37.797, lng: -121.216 }, //Manteca, California
  { lat: 36.961, lng: -120.06 }, //Madera, California
  { lat: 36.746, lng: -119.77 }, //Fresno, California
  { lat: 35.373, lng: -119.018 }, //Bakersfield, California
  { lat: 33.925, lng: -118.273 }, //South Main Street, Los Angeles, California
  { lat: 34.099, lng: -118.326 }, //Sunset and Vine, Hollywood, California
  { lat: 34.101, lng: -118.333 }, //Hollywood Boulevard, Hollywood, California
  { lat: 34.065, lng: -117.201 },
  { lat: 33.927, lng: -116.979 },
  { lat: 33.922, lng: -116.679 },
  { lat: 33.72, lng: -116.215 }, //Indio, California
  { lat: 33.607, lng: -114.588 }, //Blythe, California
  { lat: 33.781, lng: -113.614 }, //Salome, Arizona
  { lat: 35.198, lng: -111.651 }, //Flagstaff, Arizona
  { lat: 36.059, lng: -102.513 }, //Dalhart, Texas
  { lat: 38.619, lng: -90.189 }, //St. Louis, Missouri
  { lat: 39.768, lng: -86.158 }, //Indianapolis, Indiana
  { lat: 39.961, lng: -82.998 }, //Columbus, Ohio
  { lat: 40.44, lng: -79.995 }, //Pittsburgh, Pennsylvania
  { lat: 40.273, lng: -76.886 }, //Harrisburg, Pennsylvania
  { lat: 40.608, lng: -75.49 }, //Allentown, Pennsylvania
  { lat: 40.758, lng: -73.985 }, //Times Square, New York City, New York
  { lat: 40.916, lng: -74.171 }, //Back in Paterson, New Jersey
];

// Dracula
var draculaCoordinates = [
  { lat: 48.14, lng: 11.559 }, //Munich
  { lat: 48.185, lng: 16.376 }, //Vienna
  { lat: 47.5, lng: 19.084 }, //Budapest
  { lat: 46.784, lng: 23.586 }, //Cluj-Napoca
  { lat: 47.132, lng: 24.483 }, //Bistritz
  { lat: 47.28, lng: 25.024 }, //Borgo Pass
  { lat: 47.231, lng: 25.119 }, //Dracula's Castle
];

// Don Quixote
var donQuixoteCoordinates = [
  { lat: 39.067, lng: -3.122 }, //Quixote's home
  { lat: 39.158, lng: -3.021 }, //Tomelloso
  { lat: 39.4, lng: -3.125 }, //Campo de Criptana
  { lat: 39.513, lng: -2.996 }, //El Toboso
  { lat: 39.603, lng: -2.826 }, //Los Hinojosos
  { lat: 39.557, lng: -2.705 }, //Belmonte
  { lat: 39.042, lng: -2.478 }, //Munera
  { lat: 38.692, lng: -2.695 }, //Villanueva de la Fuente
  { lat: 39.284, lng: -2.79 }, //Socuéllamos
  { lat: 39.483, lng: -2.744 }, //Pedernoso
  { lat: 39.728, lng: -2.414 }, //La Huojosa
  { lat: 40.358, lng: -2.395 }, //Canaveras
  { lat: 40.666, lng: -2.069 }, //Peñalén
  { lat: 40.754, lng: -1.998 }, //Fuembellida
  { lat: 41.114, lng: -1.414 }, //Daroca
  { lat: 41.556, lng: -0.685 }, //Northwest of Fuentes de Ebro
  { lat: 41.521, lng: 0.341 }, //Fraga
  { lat: 41.552, lng: 0.619 }, //South of Lerida
  { lat: 41.532, lng: 1.382 }, //Santa Coloma de Queralt
  { lat: 41.437, lng: 1.783 }, //San Sadurnt
  { lat: 41.385, lng: 2.173 }, //Barcelona
];

// Candide
var candideCoordinates = [
  { lat: 51.433, lng: 7.661 }, // Westphalia
  { lat: 52.37, lng: 4.895 }, // Holland
  { lat: 52.656, lng: 5.448 },
  { lat: 53.373, lng: 4.957 },
  { lat: 53.456, lng: 4.686 },
  { lat: 53.409, lng: 4.188 },
  { lat: 50.562, lng: 1.049 },
  { lat: 50.346, lng: 0.61 },
  { lat: 49.41, lng: -4.449 },
  { lat: 48.516, lng: -5.987 },
  { lat: 44.04, lng: -10.074 },
  { lat: 43.011, lng: -10.432 },
  { lat: 38.61, lng: -9.54 },
  { lat: 38.589, lng: -9.138 }, // Lisbon
  { lat: 38.604, lng: -8.471 },
  { lat: 38.429, lng: -7.903 },
  { lat: 37.135, lng: -6.101 },
  { lat: 36.527, lng: -6.288 }, // Cadiz
  { lat: 29.611, lng: -17.66 },
  { lat: 28.304, lng: -18.544 },
  { lat: -18.062, lng: -34.65 },
  { lat: -27.449, lng: -41.967 },
  { lat: -35.668, lng: -54.861 },
  { lat: -34.603, lng: -58.381 }, // Buenos Aires
  { lat: -23.442, lng: -58.443 }, // Paraguay
  { lat: -3.381, lng: -63.028 },
  { lat: -2.24, lng: -62.666 }, // El Dorado-->{lat: 2.767, lng: -58.634},{lat: 5.846, lng: -55.207}, // Surinam
  { lat: 44.37, lng: -12.985 },
  { lat: 44.793, lng: -11.656 },
  { lat: 45.583, lng: -1.034 },
  { lat: 45.296, lng: -0.729 },
  { lat: 44.837, lng: -0.579 }, // Bordeaux
  { lat: 48.856, lng: 2.352 }, // Paris
  { lat: 49.922, lng: 1.077 }, // Dieppe
  { lat: 50.819, lng: -1.087 }, // Southampton
  { lat: 50.649, lng: -1.01 },
  { lat: 50.536, lng: -1.087 },
  { lat: 49.181, lng: -7.185 },
  { lat: 48.632, lng: -8.547 },
  { lat: 43.133, lng: -12.634 },
  { lat: 39.368, lng: -12.59 },
  { lat: 36.491, lng: -10.206 },
  { lat: 35.835, lng: -7.811 },
  { lat: 35.953, lng: -5.552 }, // Strait of Gibralter
  { lat: 38.184, lng: 9.744 },
  { lat: 38.03, lng: 10.612 },
  { lat: 36.593, lng: 14.379 },
  { lat: 36.452, lng: 15.214 },
  { lat: 36.655, lng: 15.819 },
  { lat: 39.896, lng: 18.786 },
  { lat: 40.129, lng: 18.789 },
  { lat: 45.44, lng: 12.315 }, // Venice
  { lat: 40.1788, lng: 19.194 },
  { lat: 35.995, lng: 21.511 },
  { lat: 36.597, lng: 25.949 },
  { lat: 39.85, lng: 25.68 },
  { lat: 41.008, lng: 28.978 }, // Constantinople
];

// Robinson Crusoe
var robinsonCrusoeCoordinates = [
  { lat: 53.959, lng: -1.087 }, //York
  { lat: 53.745, lng: -0.336 }, //Hull
  { lat: 53.631, lng: -0.12 },
  { lat: 53.54, lng: 0.093 },
  { lat: 52.965, lng: 1.492 },
  { lat: 52.646, lng: 1.943 },
  { lat: 52.249, lng: 1.998 },
  { lat: 51.718, lng: 1.444 },
  { lat: 51.49, lng: 0.773 }, // Mouth of the Thames
  { lat: 51.492, lng: 0.459 },
  { lat: 51.507, lng: -0.127 }, //London
  { lat: 51.492, lng: 0.459 },
  { lat: 51.49, lng: 0.773 }, // Mouth of the Thames
  { lat: 51.402, lng: 1.511 },
  { lat: 50.97, lng: 1.471 },
  { lat: 49.06, lng: -5.275 },
  { lat: 43.246, lng: -10.551 },
  { lat: 40.498, lng: -11.606 },
  { lat: 37.284, lng: -10.332 },
  { lat: 34.043, lng: -6.811 }, //Salé
  { lat: 33.381, lng: -8.834 },
  { lat: 27.966, lng: -13.493 },
  { lat: 21.811, lng: -17.404 },
  { lat: 18.995, lng: -16.788 },
  { lat: 17.206, lng: -20.131 },
  { lat: 15.105, lng: -22.084 },
  { lat: 1.982, lng: -24.267 },
  { lat: -9.314, lng: -28.662 },
  { lat: -12.402, lng: -34.15 },
  { lat: -12.972, lng: -38.501 }, //Salvador
  { lat: -12.671, lng: -37.18 },
  { lat: -8.612, lng: -34.082 },
  { lat: -6.702, lng: -33.696 },
  { lat: -4.816, lng: -35.07 },
  { lat: 5.64, lng: -51.64 },
  { lat: 11.233, lng: -60.698 }, //Robinson Crusoe's island (Tobago)
  { lat: 38.722, lng: -9.139 }, //Lisbon
  { lat: 40.416, lng: -3.703 }, //Madrid
  { lat: 42.812, lng: -1.645 }, //Pampeluna
  { lat: 43.604, lng: 1.444 }, //Toulouse
  { lat: 48.848, lng: 2.294 }, //Paris
  { lat: 50.951, lng: 1.858 }, //Calais
  { lat: 51.127, lng: 1.313 }, //Dover
];

// The Voyage of the Beagle
var voyageoftheBeagleCoordinates = [
  { lat: 50.363, lng: -4.15 }, //Plymouth
  { lat: 50.355, lng: -4.145 },
  { lat: 50.34, lng: -4.162 },
  { lat: 32.76, lng: -16.959 }, //Madeira Island
  { lat: 28.72, lng: -18.459 }, //Canary Islands
  { lat: 14.933, lng: -23.513 }, //Porto Praya
  { lat: 0.917, lng: -29.345 }, //St Peter and St Paul Rocks
  { lat: -3.844, lng: -32.426 }, //Fernando de Noronha
  { lat: -12.972, lng: -38.501 }, //Salvador
  { lat: -17.97, lng: -38.702 }, //Abrolhos Achipelago
  { lat: -22.906, lng: -43.172 }, //Rio de Janeiro
  { lat: -34.901, lng: -56.164 }, //Montevideo
  { lat: -38.718, lng: -62.266 }, //Bahia Blanco
  { lat: -47.751, lng: -65.901 }, //Port Desire
  { lat: -51.719, lng: -60.591 }, //Falkland Islands
  { lat: -51.573, lng: -61.446 },
  { lat: -52.487, lng: -68.436 },
  { lat: -52.406, lng: -69.434 },
  { lat: -52.571, lng: -69.667 },
  { lat: -52.746, lng: -70.485 },
  { lat: -53.588, lng: -70.759 }, //Straits of Magellan
  { lat: -54.027, lng: -71.043 },
  { lat: -52.583, lng: -74.805 },
  { lat: -43.259, lng: -74.363 }, //Chonos Archipelago
  { lat: -39.819, lng: -73.245 }, //Valdivia
  { lat: -36.82, lng: -73.044 }, //Concepcion
  { lat: -33.047, lng: -71.612 }, //Valparaiso
  { lat: -12.05, lng: -77.125 }, //Callao (Lima)
  { lat: -0.9, lng: -89.607 }, //San Cristobel (Galapagos)
  { lat: -1.308, lng: -90.431 }, //Floreana Island (Galapagos)
  { lat: -0.78, lng: -90.808 }, //Isabela Island (Galapagos)
  { lat: -0.342, lng: -90.669 }, //Santiago Island (Galapagos)
  { lat: -18.615, lng: -138.719 }, //Tuamotus
  { lat: -17.65, lng: -149.426 }, //Tahiti
  { lat: -35.184, lng: 174.164 }, //Bay of Islands (New Zealand)
  { lat: -34.7, lng: 174.125 },
  { lat: -34.377, lng: 173.774 },
  { lat: -34.207, lng: 172.883 },
  { lat: -33.844, lng: 151.233 }, //Sydney
  { lat: -34.397, lng: 151.864 },
  { lat: -43.317, lng: 148.164 },
  { lat: -43.305, lng: 147.642 },
  { lat: -42.882, lng: 147.327 }, //Hobart
  { lat: -43.389, lng: 147.534 },
  { lat: -43.743, lng: 147.181 },
  { lat: -43.802, lng: 145.75 },
  { lat: -35.045, lng: 117.973 }, //King George's Sound
  { lat: -35.121, lng: 118.068 },
  { lat: -35.243, lng: 117.917 },
  { lat: -35.038, lng: 115.812 },
  { lat: -34.316, lng: 114.713 },
  { lat: -12.165, lng: 96.858 }, //Cocos (Keeling) Island
  { lat: -20.16, lng: 57.501 }, //Mauritius
  { lat: -20.828, lng: 54.854 }, //Bourbon Islands
  { lat: -25.958, lng: 47.197 },
  { lat: -34.415, lng: 27.07 },
  { lat: -35.065, lng: 19.27 },
  { lat: -34.069, lng: 18.588 }, //Cape Town
  { lat: -34.406, lng: 18.613 },
  { lat: -34.429, lng: 18.382 },
  { lat: -15.965, lng: -5.708 }, //St Helena
  { lat: -7.946, lng: -14.355 }, //Ascension Island
  { lat: -13.923, lng: -35.793 }, //Bahia
  { lat: -8.688, lng: -35.073 }, //Pernambuco
  { lat: 15.707, lng: -25.62 }, //Cape Verde
  { lat: 38.117, lng: -26.608 }, //Azores
  { lat: 50.152, lng: -5.066 }, //Falmouth
];

// Mason & Dixon
var masonDixonCoordinates = [
  { lat: 39.721, lng: -80.278 }, //Left end
  { lat: 39.722, lng: -75.788 }, //Corner
  { lat: 38.46, lng: -75.693 }, //Right end
];

// The Travels of Marco Polo
var marcoPoloCoordinates = [
  { lat: 45.44, lng: 12.315 }, //Venice
  { lat: 40.166, lng: 18.652 },
  { lat: 35.012, lng: 21.989 },
  { lat: 32.933, lng: 35.082 }, //Acre
  { lat: 31.768, lng: 35.213 }, //Jersualem
  { lat: 32.933, lng: 35.102 }, //Acre
  { lat: 35.724, lng: 34.719 },
  { lat: 36.482, lng: 34.17 }, //Ayas
  { lat: 41.002, lng: 39.716 }, //Trebizon
  { lat: 39.905, lng: 41.265 }, //Erzurum
  { lat: 38.096, lng: 46.273 }, //Tabriz
  { lat: 27.192, lng: 56.289 }, //Ormuz
  { lat: 30.283, lng: 57.083 }, //Kerman
  { lat: 36.755, lng: 66.897 }, //Balkh
  { lat: 39.467, lng: 75.993 }, //Kashgar
  { lat: 37.114, lng: 79.922 }, //Hotan
  { lat: 40.142, lng: 94.661 }, //Dunhuang
  { lat: 39.732, lng: 98.494 }, //Jiuquan
  { lat: 38.925, lng: 100.449 }, //Zhangye
  { lat: 36.061, lng: 103.834 }, //Lanzhou
  { lat: 42.34, lng: 116.193 }, //Shangdu
  { lat: 39.904, lng: 116.407 }, //Beijing
  { lat: 30.274, lng: 120.155 }, //Hangchow
  { lat: 24.874, lng: 118.675 }, //Quanzhou
  { lat: 24.744, lng: 118.857 },
  { lat: 24.634, lng: 118.872 },
  { lat: 16.049, lng: 108.245 }, //Champa
  { lat: 16.045, lng: 108.505 },
  { lat: 15.114, lng: 109.396 },
  { lat: 12.093, lng: 109.747 },
  { lat: 1.288, lng: 104.385 }, //Singapore Strait
  { lat: 1.095, lng: 103.577 },
  { lat: 2.803, lng: 100.57 },
  { lat: 2.7, lng: 100.069 }, //Sumatra
  { lat: 3.107, lng: 100.159 },
  { lat: 5.659, lng: 97.723 },
  { lat: 7.64, lng: 93.551 }, //Nicobar Islands
  { lat: 10.316, lng: 79.376 }, //Coromandel Coast
  { lat: 9.126, lng: 79.542 },
  { lat: 7.814, lng: 78.066 },
  { lat: 7.95, lng: 76.865 },
  { lat: 15.347, lng: 73.311 },
  { lat: 19.352, lng: 72.322 },
  { lat: 25.671, lng: 57.123 },
  { lat: 27.192, lng: 56.305 }, //Ormuz
  { lat: 38.096, lng: 46.293 }, //Tabriz
  { lat: 39.905, lng: 41.285 }, //Erzurum
  { lat: 41.002, lng: 39.766 }, //Trebizon
  { lat: 41.918, lng: 38.77 },
  { lat: 42.472, lng: 32.442 },
  { lat: 41.236, lng: 29.14 },
  { lat: 41.008, lng: 28.978 }, //Constantinople
  { lat: 40.691, lng: 27.425 },
  { lat: 40.406, lng: 26.72 },
  { lat: 40.2, lng: 26.39 },
  { lat: 40.124, lng: 26.383 },
  { lat: 39.936, lng: 25.938 },
  { lat: 37.575, lng: 24.485 },
  { lat: 36.004, lng: 23.197 },
  { lat: 36.421, lng: 21.187 },
  { lat: 40.597, lng: 18.605 },
  { lat: 45.44, lng: 12.315 }, //Venice
];

// The Grapes of Wrath
var grapesofWrathCoordinates = [
  { lat: 35.46, lng: -94.787 }, //Sallisaw
  { lat: 35.49, lng: -94.994 },
  { lat: 35.48, lng: -95.289 },
  { lat: 35.457, lng: -95.384 },
  { lat: 35.459, lng: -95.619 },
  { lat: 35.422, lng: -96.295 },
  { lat: 35.507, lng: -96.567 }, //Paden
  { lat: 35.518, lng: -97.632 }, //Bethany
  { lat: 35.533, lng: -98.68 },
  { lat: 35.384, lng: -99.511 },
  { lat: 35.269, lng: -99.631 },
  { lat: 35.27, lng: -102.666 }, //  Adrian
  { lat: 34.946, lng: -104.676 }, //Santa Rosa
  { lat: 34.963, lng: -104.741 },
  { lat: 35.004, lng: -106.013 }, //  Moriarty
  { lat: 35.532, lng: -108.705 },
  { lat: 34.912, lng: -110.157 },
  { lat: 35.216, lng: -111.552 },
  { lat: 35.171, lng: -111.654 },
  { lat: 35.322, lng: -112.905 }, //  Seligman
  { lat: 35.214, lng: -114.048 }, //  Hilltop
  { lat: 34.809, lng: -114.148 },
  { lat: 34.725, lng: -114.542 },
  { lat: 34.848, lng: -114.614 }, //Needles, CA
  { lat: 34.89, lng: -114.7 },
  { lat: 34.725, lng: -116.16 },
  { lat: 34.864, lng: -116.888 }, //Daggett
  { lat: 34.895, lng: -117.017 }, //Barstow
  { lat: 35.132, lng: -118.448 }, //Tehachap
  { lat: 35.373, lng: -119.018 }, //Bakersfield
  { lat: 37.741, lng: -121.558 },
  { lat: 37.774, lng: -122.419 }, //San Francisco
];

// Eat, Pray, Love
var EatPrayLoveCoordinates = [
  { lat: 40.712, lng: -74.005 }, //New York
  { lat: 41.902, lng: 12.496 }, //Rome
  { lat: 19.501, lng: 73.013 }, //Mumbai
  { lat: -8.409, lng: 115.188 }, //Bali
];

// Life of Pi
var LifeofPiCoordinates = [
  { lat: 11.913, lng: 79.814 }, //Pondicherry
  { lat: 10.04, lng: 93.066 },
  { lat: 2.681, lng: 101.146 },
  { lat: 1.111, lng: 103.574 },
  { lat: 1.324, lng: 104.455 },
  { lat: 14.599, lng: 120.984 }, //Manila
  { lat: 14.361, lng: 120.422 },
  { lat: 14.813, lng: 119.867 },
  { lat: 16.232, lng: 119.548 },
  { lat: 19.107, lng: 120.115 },
  { lat: 19.821, lng: 120.709 },
  { lat: 24.58, lng: 159.121 }, //Sinking
  { lat: 20.289, lng: -105.6206 }, //Mexico
];

// Huckleberry Finn
var HuckleberryFinnCoordinates = [
  { lat: 39.708, lng: -91.358 }, //Hannibal
  { lat: 39.706, lng: -91.334 }, //Jackson's Island
  { lat: 39.273, lng: -90.76 },
  { lat: 39.04, lng: -90.702 },
  { lat: 38.868, lng: -90.573 },
  { lat: 38.962, lng: -90.424 },
  { lat: 38.847, lng: -90.109 },
  { lat: 38.721, lng: -90.188 },
  { lat: 38.623, lng: -90.18 }, //St. Louis
  { lat: 38.341, lng: -90.365 },
  { lat: 38.181, lng: -90.321 },
  { lat: 37.694, lng: -89.517 },
  { lat: 37.539, lng: -89.516 },
  { lat: 37.43, lng: -89.436 },
  { lat: 37.341, lng: -89.439 },
  { lat: 37.314, lng: -89.509 },
  { lat: 37.254, lng: -89.512 },
  { lat: 37.088, lng: -89.377 },
  { lat: 37.049, lng: -89.384 },
  { lat: 36.998, lng: -89.301 },
  { lat: 37.022, lng: -89.258 },
  { lat: 37.058, lng: -89.308 },
  { lat: 37.088, lng: -89.269 },
  { lat: 37.016, lng: -89.199 },
  { lat: 36.975, lng: -89.186 },
  { lat: 36.982, lng: -89.122 }, //Cairo
  { lat: 36.959, lng: -89.099 },
  { lat: 36.578, lng: -89.213 },
  { lat: 36.566, lng: -89.265 },
  { lat: 36.603, lng: -89.31 },
  { lat: 36.459, lng: -89.482 },
  { lat: 36.556, lng: -89.472 },
  { lat: 36.578, lng: -89.524 },
  { lat: 36.544, lng: -89.566 },
  { lat: 36.473, lng: -89.522 },
  { lat: 36.359, lng: -89.522 },
  { lat: 36.332, lng: -89.613 },
  { lat: 36.259, lng: -89.567 },
  { lat: 36.235, lng: -89.685 },
  { lat: 36.138, lng: -89.589 },
  { lat: 35.969, lng: -89.717 },
  { lat: 35.9, lng: -89.665 }, // Hales Point
  { lat: 35.907, lng: -89.736 },
  { lat: 35.863, lng: -89.766 },
  { lat: 35.825, lng: -89.703 },
  { lat: 35.718, lng: -89.935 },
  { lat: 35.519, lng: -89.906 },
  { lat: 35.346, lng: -90.094 },
  { lat: 35.162, lng: -90.062 }, // Memphis
  { lat: 35.119, lng: -90.09 },
  { lat: 35.129, lng: -90.15 },
  { lat: 34.735, lng: -90.563 },
  { lat: 34.41, lng: -90.586 },
  { lat: 34.36, lng: -90.766 },
  { lat: 34.127, lng: -90.954 },
  { lat: 34.035, lng: -90.892 },
  { lat: 33.965, lng: -91.087 },
  { lat: 33.929, lng: -91.016 },
  { lat: 33.787, lng: -91.044 },
  { lat: 33.686, lng: -91.224 },
  { lat: 33.604, lng: -91.131 },
  { lat: 33.563, lng: -91.229 },
  { lat: 33.469, lng: -91.122 },
  { lat: 33.429, lng: -91.118 }, //Greenville
];
