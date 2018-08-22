// Create the tile layer that will be the background of our map
var baseMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

// Initialize all of the LayerGroups we'll be using
var layers = {
  Cities: new L.LayerGroup(),
  Colleges: new L.LayerGroup(),
};

// Create the map with our layers
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4,
});

// Add our tile layer to the map
baseMap.addTo(myMap);

function onEachFeature(feature, layer) {
    layer.bindPopup("<p>" + feature.properties.Name + "</p>");
}

L.geoJSON(data, {
    onEachFeature: onEachFeature
}).addTo(myMap);

var icon = {
    radius: 8,
    fillColor: "#ffff00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJson(city_data, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, icon);
    },
    onEachFeature: function (feature, layer){
        layer.bindPopup("<p>" + feature.properties.city + ", " + feature.properties.state + "</p>");
    }
}).addTo(myMap); 










