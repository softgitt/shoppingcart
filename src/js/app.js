var app = angular.module('myApp',['drag']);
app.controller('theController',['$scope','$http',function($scope,$http){
    
    var url = 'https://jsonplaceholder.typicode.com/todos/';
    $http({
        method:'GET',
        url: url,
    }).then(
        function success(rensponse){
           $scope.myHttpService = rensponse.data;
           
        },
        function error(rensponse){
            $scope.myHttpService = "error"
        }
    ) 
}])