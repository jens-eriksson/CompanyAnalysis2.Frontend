(function () {

  var module = angular.module('companyAnalysis');
  
  module.component('appHeader', {
    controllerAs: 'model',
    templateUrl: '/app-header/app-header.component.html',
    controller: function AppHeaderController() {
      this.message = 'Hej!';
    }
  });

} ());

