//create map
const map = L.map('mapid').setView([-23.6821604, -46.8754915], 15)

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
L
  .marker([-23.6821604, -46.8754915])
  .addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();