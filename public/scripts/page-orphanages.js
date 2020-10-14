// tipos de dados
// String ""
// Number 01
// Object {}
// Boolean true or false
// Array []


// Latitude e longitude do mapa inseridos através de array [0,1] > setView
const map = L.map('mapid').setView([-27.2204301,-49.6508993], 15)

// Função tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map)

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create popup Overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" ></a>')


//Create and add marker
    L
    .marker([-27.2204301,-49.6508993], { icon })
    .addTo(map)
    .bindPopup(popup)
