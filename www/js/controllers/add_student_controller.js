app.controller("AddStudentsController", function($scope, $ionicPlatform, $ionicLoading, $location){

    console.log("inside add AddStudentsController controller");
    $scope.student = {};
    $scope.createStudent = function(){
        console.log("clicked on create student");
        var query = 'INSERT INTO students (first_name, last_name, gender) VALUES (?,?,?)';
        /*db.executeSql(query, [$scope.student.firstname, $scope.student.lastname, $scope.student.gender],
        function(res){
            $location.path("/app/students");
        }, function(error){
            console.log("error adding student " + JSON.stringify(error));
        });*/
        db.transaction(function(tx){
            tx.executeSql(query, [$scope.student.firstname, $scope.student.lastname, $scope.student.gender],
            function(tx, res){
                console.log("successfully added");
            }, function(tx, error){
                console.log("error adding student " + JSON.stringify(error));
            });
        }, function(error){
            console.log("error adding student " + JSON.stringify(error));
        }, function(){
            console.log("successfully added");
        });
        // had to move this out of success promise because, it wasn't navigating to students page after adding
        // successfully. It was only navigating back when tried adding student twice
        $location.path("/app/students");
    };
});