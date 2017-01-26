

angular.module('yapp').controller('pilotCtrl', ['$scope', '$http', '$state', function ($scope, $http, $location, $state) {


   // $scope.$state = {};
    $scope.pilotsList = null;
    showPilots();
    function showPilots() {
       $('#create').show();
        $('#update').hide();
    $http.get('Api/PilotApi').success(function (data, status, headers, config) {

            $scope.pilotsList = data;

    });

    }
    $scope.pilot = {};

    $scope.Create = function (pilot) {
         
        data = pilot;

        $http.post('Api/PilotApi', data).success(function (data, status, headers, config) {
            $scope.pilot = null;
            showPilots();

        }).error(function (data, status, header, config) {
            alert("error");
        });

    }

    //edit get 

    $scope.EditGet = function (pilot) {
     
        var data = pilot.Id;

    $http.get('Api/PilotApi/' + data).success(function (data) {
        //  alert("edited");

        $('#create').hide();
        $('#update').show();
     
        $scope.pilot = data;
    });
    }

    // edit post
    $scope.Update = function (pilot) {
        data = pilot;
        console.log(data);

        $http.put('Api/PilotApi', data).success(function (data, status, headers, config) {
            // alert("added successfully");
            $scope.pilot = null;
            showPilots();

        }).error(function (data, status, header, config) {
            alert("error");
        });

    }
    // delete record
    $scope.Delete = function (pilot) {
        var data = pilot.Id;
        $http.delete('Api/PilotApi/' + data).success(function (data) {

            showPilots();

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
