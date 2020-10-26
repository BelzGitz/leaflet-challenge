// / / Define variables for our tile layers
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

// Define a baseMaps object to hold our base layers
var baseMaps = {
  "light map": lightmap,
  
};
var earthquakes = new L.LayerGroup()

// Create overlay object to hold our overlay layer
var overlayMaps = {
  Earthquakes: earthquakes
};

// Create our map object, giving it the lightmap and earthquakes layers to display on load
var myMap = L.map("mapid", {
center: [
  37.09, -95.71
],
zoom: 5,
layers: [lightmap,  earthquakes]
});

// add lightmap to myMap
lightmap.addTo(myMap)

// Store our API endpoint
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// // Perform a GET request to the query URL
d3.json(queryUrl, function(data) {

  // create function for earthquake color(depth) and circle sizes (magnitude)
function markerColor (depth){
  var color = ""
  if (depth > 90){
    color = "red"
  }
else if (depth > 70){
  color = "blue"
}
else if (depth > 50){
  color = "orange"
}
else if (depth > 30){
  color = "yellow"
}
else if (depth > 10){
  color = "green"
}
else {color = "lime"}
return color
}

// create function for circle sizes 
function markerRadius (magnitude){
  return magnitude * 5
}


L.geoJson(data,{
  pointToLayer : function (feature,coordinate){
    return L.circleMarker(coordinate)
  },

// Create pop up with earthquake information 
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    
    },

style:function(feature){
  return {
    fillColor: markerColor(feature.geometry.coordinates[2]),
    radius: markerRadius(feature.properties.mag),
    color:"black",
    weight: 1,
    opacity:1,
    fillOpacity:0.8
  }
}
}).addTo(earthquakes)

});

//  an object legend
  var legend = L.control({
  position:"bottomright"
});

// details for the legen
  legend.onAdd =  function(map){
  var div = L.DomUtil.create("div", "info legend");

  var grades = [-10,10,30,50,70,90];
  var colors = [
   "lime",
  "green",
  "yellow",
  "orange",
  "blue",
  "red"
  ];

  // looping through the legend label
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  }
  return div;
};

//  legend to the map
legend.addTo(myMap);
