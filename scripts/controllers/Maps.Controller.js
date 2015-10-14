angular
  .module('TacoYelp')
  .controller('MapCtrl', MapCtrl);

function MapCtrl($q) {
  var vm = this;
  vm.title = "TacoYelp <<-- Name Subject To Change";

  function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBh1AOmSbyrU9Qn5c4OeYGb-VIVrfMEDHY&libraries=places&callback=initMap";

  }

  if (!map) {
    loadScript();
  } else {
   initMap();
  }


}
