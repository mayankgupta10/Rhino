angular.module('yapp').controller('aeroplanesCtrl', ['$scope', '$http', '$state',  function ($scope, $http, $location, $state) {


    // $scope.$state = {};
    $scope.aeroplanesList = null;
    showAeroplanes();

    function showAeroplanes() {
        $('#create').show();
        $('#update').hide();
        $http.get('Api/AeroplaneApi').success(function (data, status, headers, config) {
     
            $scope.aeroplanesList = data;

        });

    }
    $scope.aeroplane = {};

    $scope.Create = function (aeroplane) {
  
        data = aeroplane;

        $http.post('Api/AeroplaneApi', data).success(function (data, status, headers, config) {
           $scope.aeroplane = null;
            showAeroplanes();

        }).error(function (data, status, header, config) {
            alert("error");
        });

    }

    //edit get 

    $scope.EditGet = function (aeroplane) {
        var data = aeroplane.Id;

        $http.get('Api/AeroplaneApi/' + data).success(function (data) {
            //  alert("edited");
         
            $('#create').hide();
            $('#update').show();

            $scope.aeroplane = data;
        });
    }

    // edit post
    $scope.Update = function (aeroplane) {
        data = aeroplane;
        console.log(data);
      
        $http.put('Api/AeroplaneApi', data).success(function (data, status, headers, config) {
            // alert("added successfully");
            $scope.aeroplane = null;
            showAeroplanes();

        }).error(function (data, status, header, config) {
            alert("error");
        });

    }
    // delete record
    $scope.Delete = function (aeroplane) {
     
        var data = aeroplane.Id;
        $http.delete('Api/AeroplaneApi/' + data).success(function (data) {
           
            showAeroplanes();

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
