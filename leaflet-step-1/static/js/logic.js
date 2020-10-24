// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// // Perform a GET request to the query URL
// d3.json(queryUrl, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   createFeatures(data.features);
// });

// function createFeatures(data) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   function onEachFeature(feature, layer) {
//     layer.bindPopup("<h3>" + feature.properties.place +
//       "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//   }
// // // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < data.length; i++) {

//   //     // Conditionals for earthquake magnitude depth
//       var color = "";
  
//       if (data [i].properties.mag < 1) {
//           color = "green"
//       }
      
//       else if (data [i].properties.mag < 2) {
//         color = "lightgreen";
//       }
//       else if (data [i].properties.mag < 3) {
//         color = "lime";
//       }
//       else if (data [i].properties.mag < 4) {
//           color ="yellow";
//       }
//       else if (data [i].properties.mag < 5) {
//           color = "lightorange";
//       }
//       else if (data [i].properties.mag < 6) {
//           color = "orange";
//       }
//       else {
//         color = "red";
//       }
    

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   // var earthquakes = L.geoJSON(data, {
//   //   onEachFeature: onEachFeature
//   // });
//   var geojsonMarkerOptions = {
//     radius: 8,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };

//   var earthquakes = L.geoJSON(data, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, {
//               fillOpacity: 0.75,
//               color: "black",
//               fillColor: color,
//               // Adjust radius
//               radius: feature.properties.mag*5,
//             })
//     }
// })
// earthquakes.addTo(myMap)

// }

//   // Sending our earthquakes layer to the createMap function
//   createMap(earthquakes);

// }

// function createMap(earthquakes) {

//   // // // Define streetmap and darkmap layers
//   // var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   //   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   //   tileSize: 512,
//   //   maxZoom: 18,
//   //   zoomOffset: -1,
//   //   id: "mapbox/streets-v11",
//   //   accessToken: API_KEY
//   // });

//   // / Define variables for our tile layers
//   var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "light-v10",
//     accessToken: API_KEY
//   });
  

//   // var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   //   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   //   maxZoom: 18,
//   //   id: "dark-v10",
//   //   accessToken: API_KEY
//   // });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "light map": lightmap,
//     // "Street Map": streetmap,
//     // "Dark Map": darkmap
//   };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };

// // Create our map, giving it the streetmap and earthquakes layers to display on load
// var myMap = L.map("mapid", {
//   center: [
//     37.09, -95.71
//   ],
//   zoom: 5,
//   layers: [lightmap,  earthquakes]
// });

// lightmap.addTo(myMap)
// // // //  // Add circles to map
// // //     L.circle([i].location, {
// // //     fillOpacity: 0.75,
// // //     color: "black",
// // //     fillColor: color,
// //     // Adjust radius
// //     radius: earthquakes[i].feature.properties.mag,
// //   }).bindPopup("<h1>" + earthquakes[i].name + "</h1> <hr> <h3>Points: " + earthquakes[i].mag + "</h3>").addTo(myMap);
// // }


  
//   // Create a layer control
//   // Pass in our baseMaps and overlayMaps
//   // Add the layer control to the map
  
// }













// / Define variables for our tile layers
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});


// var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "dark-v10",
//   accessToken: API_KEY
// });

// Define a baseMaps object to hold our base layers
var baseMaps = {
  "light map": lightmap,
  // "Street Map": streetmap,
  // "Dark Map": darkmap
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
  color = "dark orange"
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
    // layer.bindPopup("<h1>" + feature.properties.earthquakes + "</h1> <hr> <h2>" + feature.properties.earthquakes + "</h2>");
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

// earthquakes.addTo(myMap)
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
  "dark orange",
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
