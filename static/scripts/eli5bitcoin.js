var app = angular.module("eli5bitcoin", []);
var controller = app.controller("mainController", function($scope, $http){
  $scope.content = [];
  $scope.getContent = function(event){
    var promise = $http.get('/'+event.target.innerHTML);
    promise.success(function(data, status, headers, config){
      $scope.content = data;
    })
  }
  $scope.showfilter=false;
});


function showOnLoad(){
	 document.getElementById('nav-learn').click();
	 }

if (window.addEventListener)
	window.addEventListener("load", showOnLoad, false);
else if (window.attachEvent)
	window.attachEvent("onload", showOnLoad);
else window.onload = showOnLoad;
