angular
  .module('TacoYelp')
  .controller('StoresCtrl', StoresCtrl);

function StoresCtrl($location, $scope, $routeParams, $http) {
  var vm = this;

  if (typeof google === 'undefined') {
    window.location = '/'
  } else {
    console.log('yes')
    var request = {
      placeId: $routeParams.id
    }

    var service = new google.maps.places.PlacesService(map);

    service.getDetails(request, function(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        vm.place = place;
        console.log(place);
        $scope.$apply();
      }
    })
  }
}
