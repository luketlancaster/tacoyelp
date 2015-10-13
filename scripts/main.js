var map;
var infowindow;
var lat;
var lon;

function initMap() {
  var pyrmont = new google.maps.LatLng(39.132,-83.756);
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

function findTheBell(pos) {
  var request = {
    location: pos,
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
    position: place.geometry.location,
    icon: 'img/Taco_Pin.PNG'
  });

  google.maps.event.addListener(marker, 'click', function() {
    var contentForWindow = "<div class='content'>" +
    "<h1><a href=/#/" + place.place_id  + ">" + place.name + "</a></h1>" +
    "</div>";
    infowindow.setContent(contentForWindow);
    infowindow.open(map, this);
  })
}

var options = {
  timeout: 5000,
  maximumAge: 0
};

var success = function(pos) {
  var pos = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  }
  map.setCenter(pos);
  findTheBell(pos);
};

var error = function(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error, options);
}


function getJSON(url, cb) {
  var data = new XMLHttpRequest();
  data.open('GET', url);

  data.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  data.send();
}

