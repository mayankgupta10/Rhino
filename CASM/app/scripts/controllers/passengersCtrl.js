angular.module('yapp').controller('passengersCtrl', ['$scope', '$http', '$state',  function ($scope, $http, $location, $state) {



    // $scope.$state = {};
    $scope.passengersList = null;
    showPassengers();

    function showPassengers() {
        $('#create').show();
        $('#update').hide();
        $http.get('Api/PassengerApi').success(function (data, status, headers, config) {

            $scope.passengersList = data;

        });

    }
    $scope.passenger = {};

    $scope.Create = function (passenger) {
     
        data = passenger;

        $http.post('Api/PassengerApi', data).success(function (data, status, headers, config) {
           
            $scope.passenger = null;
            showPassengers();

        }).error(function (data, status, header, config) {
            alert("error");
        });

    }

    //edit get 

    $scope.EditGet = function (passenger) {
      
        var data = passenger.Id;

        $http.get('Api/PassengerApi/' + data).success(function (data) {
            //  alert("edited");
           
            $('#create').hide();
            $('#update').show();

            $scope.passenger = data;
        });
    }

    // edit post
    $scope.Update = function (passenger) {
        data = passenger;
        console.log(data);
    
        $http.put('Api/PassengerApi', data).success(function (data, status, headers, config) {
            // alert("added successfully");
            $scope.passenger = null;
            showPassengers();

        }).error(function (data, status, header, config) {
            alert("error");
        });

    }
    // delete record
    $scope.Delete = function (passenger) {
       
        var data = passenger.Id;
        $http.delete('Api/PassengerApi/' + data).success(function (data) {
          
            showPassengers();

            toaster.pop('danger', "Record", "deleted  succesfully");

        }).error(function (data) {
            $scope.error = "An error has occured while deleting employee! " + data;
        });
    };




    // sorting on th click
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }





}]);
