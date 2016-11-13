app.controller("StudentsController", function($scope, $ionicPlatform){
    console.log("inside students controller");
    $scope.students = [];
    for (var i=0; i<4; i++){
        $scope.students.push({id: i, first_name: 'Manohar ' + i});
    }
});