
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
    iconAnchor: [29,68]
})


let marker;

// Create and add marker

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //Remove icon
    marker && map.removeLayer(marker)    



    // Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// Add photo field

function addPhotoField() {

//Photo Container #images
const container = document.querySelector('#images')

//Duplicate container .new-image
const fieldsContainer = document.querySelectorAll('.new-upload')

//Clone last added photo
const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

//Verify if field is empty, if it is, don't add to photo container
const input = newFieldContainer.children[0]

if(input.value == "") {
    return
}

//Clean field before adding to photo container
input.value = ""


//Add clone to photo container
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {

        // Clean field value
        span.parentNode.children[0].value = ""
        return
    }

    // Delete field
    span.parentNode.remove();
}

// Yes or no selection
function toggleSelect(event) {
    //Remove class .active
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    //Update input hidden
    const input = document.querySelector('[name="open_on_weekends"]')

    // Verify if yes or no
    input.value = button.dataset.value

}


