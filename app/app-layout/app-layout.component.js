(function(){

var module = angular.module('companyAnalysis');

module.component('appLayout', {
    controllerAs: 'model',
    templateUrl: '/app-layout/app-layout.component.html',
    controller: function AppLayoutController() {
      var model = this;
    },
    $routeConfig: [
      {path: '/companies', component: 'companyList', name: 'Companies'},
      {path: '/**', redirectTo: ['Companies']}
    ]
  });

}());

