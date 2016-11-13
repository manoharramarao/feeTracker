app.controller("StudentsController", function($scope, $ionicPlatform, $ionicLoading, $location){
    console.log("inside students controller");
    $scope.students = [];

    $ionicPlatform.ready(function(){
        $ionicLoading.show({
            template: "Loading..."
        });
        var query = "SELECT id, first_name FROM students";
        db.transaction(function(tx){
            tx.executeSql(query, [], function(tx, res){
                if(res.rows.length > 0){
                    for(var i=0; i<res.rows.length; i++){
                        $scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name});
                    }
                };
                console.log("students = " + JSON.stringify($scope.students));
            }, function(tx, error){
                console.log("error occurred on getting students " + JSON.stringify(error));
            });
        });
        $ionicLoading.hide();
    });

    $scope.addStudent = function(){
        console.log("clicked on add student");
        $location.path("/app/addStudent");
    };
});