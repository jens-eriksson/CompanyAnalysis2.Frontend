(function(){

var module = angular.module('companyAnalysis');

module.component('appNavigation', {
    controllerAs: 'model',
    templateUrl: '/app-navigation/app-navigation.component.html',
    controller: function AppNavigationtController() {
      var model = this;

      model.toogleNavbar = function(){
        if(model.navState == '')
          model.navState = 'collapsed';
        else
          model.navState = '';
      },
      model.navState = '';
    }
  });

}());

