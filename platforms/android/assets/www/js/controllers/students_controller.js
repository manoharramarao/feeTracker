feeTrackerApp.controller("StudentsController", function($scope, $ionicPlatform, $cordovaSQLite){
    console.log("inside students controller");
    $scope.students = [];
    for (var i=0; i<4; i++){
        $scope.students.push({id: i, first_name: 'Manohar ' + i});
    }
    /*$ionicPlatform.ready(function(){
        var query = "SELECT id, first_name FROM students";
        db.transaction(function(tx){
            tx.executeSql(query, [], function(tx, res){
                if(res.rows.length > 0){
                    for(var i=0; i<res.rows.length; i++){
                        $scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name});
                    }
                }
            }, function(tx, error){
                console.log("error occurred on getting students " + JSON.stringify(error));
            });
        });
        *//*$scope.$digest();*//*
        *//*$cordovaSQLite.execute(db, query, []).then(function(res){
            if(res.rows.length > 0){
                for(var i=0; i<res.rows.length; i++){
                    $scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name});
                }
            }
        }, function(error){
            console.error(error);
        });*//*
    });*/

});