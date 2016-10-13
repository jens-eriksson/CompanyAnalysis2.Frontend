(function(){

var module = angular.module('companyAnalysis');

module.component('appCompanyList', {
    controllerAs: 'model',
    templateUrl: '/app-company-list/app-company-list.component.html',
    controller: function AppCompanyListController() {
      this.message = 'Hej!';
    }
  });

}());

