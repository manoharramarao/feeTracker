app.controller("StudentsController", function($scope, $ionicPlatform, $ionicLoading, $location, $cordovaSQLite){
    console.log("inside students controller");
    $scope.students = [];

    $ionicPlatform.ready(function(){
        $ionicLoading.show({
            template: "Loading..."
        });
        var query = "SELECT * FROM students";
        $cordovaSQLite.execute(db, query, []).then(function(res){
            if(res.rows.length > 0){
                for(var i=0; i<res.rows.length; i++){
                    // TODO: @Manohar - Need to remove this if condition once you same profile pics
                    if(res.rows.item(i).gender === "Male"){
                        $scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name,
                            last_name: res.rows.item(i).last_name, gender: res.rows.item(i).gender, icon: 'img/male.png',
                            last_updated: new Date(res.rows.item(i).last_updated)});
                    }else if(res.rows.item(i).gender === "Female"){
                        $scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name,
                            last_name: res.rows.item(i).last_name, gender: res.rows.item(i).gender, icon: 'img/female.png',
                            last_updated: new Date(res.rows.item(i).last_updated)});
                    }
                }
            };
        }, function(error){
            console.error(error);
        });
        /*db.transaction(function(tx){
            tx.executeSql(query, [], function(tx, res){
                if(res.rows.length > 0){
                    for(var i=0; i<res.rows.length; i++){
                        *//*$scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name,
                        last_name: res.rows.item(i).last_name, gender: res.rows.item(i).gender});*//*
                        // TODO: @Manohar - Need to remove this if condition once you same profile pics
                        if(res.rows.item(i).gender === "Male"){
                            $scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name,
                                last_name: res.rows.item(i).last_name, gender: res.rows.item(i).gender, icon: 'img/male.png'});
                        }else if(res.rows.item(i).gender === "Female"){
                            $scope.students.push({id: res.rows.item(i).id, first_name: res.rows.item(i).first_name,
                                last_name: res.rows.item(i).last_name, gender: res.rows.item(i).gender, icon: 'img/female.png'});
                        }
                    }
                };
                console.log("students = " + JSON.stringify($scope.students));
            }, function(tx, error){
                console.log("error occurred on getting students " + JSON.stringify(error));
            });
        });*/
        $ionicLoading.hide();
    });

    $scope.addStudent = function(){
        console.log("clicked on add student");
        $location.path("/app/addStudent");
    };

    $scope.onClickStudent = function(studentId){
        console.log("clicked on student id " + studentId);
        $location.path("/app/payments/" + studentId);
    };
});