(function () {

angular.module('yapp').controller('homeTripCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.aeroplanesList = null;
    showAeroplaneList();
    function showAeroplaneList(){

    // get the aeroplane list in drop down from db
    $http.get('Api/AeroplaneApi').success(function (data, status, headers, config) {

        $scope.aeroplanesList = data;

    });
    }


    // create trip details
    $scope.AddTrip = function (trip) {

        $http.post('Api/TripDetailsApi', trip).success(function (data, status, headers, config) {
            alert("added trip deteails");
            $scope.trip = null;
        }).error(function (data, status, header, config) {
            alert("error");
        });

    }

    $scope.SelectedEvent = null;
    var isFirstTime = true;

    $scope.events = [];
    $scope.eventSources = [$scope.events];


    //Load events from server
    $http.get('/Home/GetEvents', {
        cache: true,
        params: {}
    }).then(function (data) {
        debugger;
        $scope.events.slice(0, $scope.events.length);
        angular.forEach(data.data, function (value) {
            $scope.events.push({
                id:value.Id,
                title: value.Tittle,
                aeroplane: value.Aeroplane,
                start: new Date(parseInt(value.Date.substr(6))),
                //end: new Date(parseInt(value.EndAt.substr(6))),
                //allDay: value.IsFullDay,
                stick: true
            });
        });
    });
   
    //configure calendar
    $scope.uiConfig = {
        calendar: {
           
            editable: true,
            displayEventTime: false,
            header: {
                left: 'month basicWeek basicDay agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            eventClick: function (event) {

                $scope.SelectedEvent = event;
                $state.go('addtrip', { ref: $scope.SelectedEvent.id });
                debugger;
               
            },
            //eventAfterAllRender: function () {
            //    if ($scope.events.length > 0 && isFirstTime) {
            //        //Focus first event
            //        uiCalendarConfig.calendars.myCalendar.fullCalendar('gotoDate', $scope.events[0].start);
            //        isFirstTime = false;
            //    }
            //}
        }
    };

}]);


}());


