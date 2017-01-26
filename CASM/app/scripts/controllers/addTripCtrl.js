(function () {

    angular.module('yapp').controller('addTripCtrl', ['$scope', '$http', '$state', '$stateParams', function ($scope, $http, $state, $stateParams) {
     
        debugger;
       var tripId = $stateParams.ref;
        console.log(tripId);

        $http.get('Api/TripDetailsApi/'+tripId).success(function (data, status, headers, config) {
            debugger;
            $scope.addTrip = data;

        });
    



    }]);

}());