angular
  .module('TacoYelp')
  .controller('StoresCtrl', StoresCtrl);

function StoresCtrl($routeParams) {
  var vm = this;
  vm.title = $routeParams.id;
}
