(function () {

  var module = angular.module('companyAnalysis');
  
  module.component('appFooter', {
    controllerAs: 'model',
    templateUrl: '/app-footer/app-footer.component.html',
    controller: function AppFooterController() {
      this.message = 'Hej!';
    }
  });

} ());

