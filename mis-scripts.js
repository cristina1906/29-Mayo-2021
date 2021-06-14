$(function(){
    
   var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  
})

// var mymap = L.map('mapid').setView([19.371647489719916, -99.18535975985547], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(mymap);

// var marker = L.marker([19.371647489719916, -99.18535975985547]).addTo(mymap);

// var circle = L.circle([19.371647489719916, -99.18535975985547], {
//   color: '#FE66EF',
//   fillColor: '#C61582',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//   [19.37, -99.18535975985547],
//   [19.6, -99.21],
//   [19.5, -99.22]
// ]).addTo(mymap);

// marker.bindPopup("<b>USB!</b><br>MDPM.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

var map = L.map('mapid').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);

var marker = L.marker([19.39678, -99.02538]).addTo(mymap);
var circle = L.circle([19.39678, -99.02538,], {
  color: '#C61582',
  fillColor: '#FE66EF',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
