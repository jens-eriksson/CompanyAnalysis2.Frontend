(function(){

var module = angular.module('companyAnalysis');

module.component('appLayout', {
    controllerAs: 'model',
    templateUrl: '/app-layout/app-layout.component.html',
    controller: function AppLayoutController() {
      var model = this;
      
      model.menus = [
      {name: 'Home', icon: 'ion-home', href: '#', subMenus: [
        {name: 'Companies', icon: 'ion-home', link: '[Companies]'}
      ]}];

    },
    $routeConfig: [
      {path: '/companies', component: 'companyList', name: 'Companies'},
      {path: '/**', redirectTo: ['Companies']}
    ],
    

  });

}());

