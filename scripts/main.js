var map;
var infowindow;
var lat;
var lon;

function initMap() {
  var pyrmont = new google.maps.LatLng(36.132,-86.756);
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 10
  });

  infowindow = new google.maps.InfoWindow();

  var request = {
    location: pyrmont,
    radius: '100',
    query: 'taco bell'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  })
}

var options = {
  timeout: 5000,
  maximumAge: 0
};

var success = function(pos) {
  lat = pos.coords.latitude;
  lon = pos.coords.longitude;
  console.log(lat + ", " + lon);
};

var error = function(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);


