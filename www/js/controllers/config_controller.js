app.controller("ConfigController", function($scope, $ionicPlatform, $ionicLoading, $location, $ionicHistory){
	console.log("inside ConfigController");

$ionicHistory.nextViewOptions({
		disableAnimate: true,
		disableBack: true
	});

	$ionicPlatform.ready(function(){
		$ionicLoading.show({
			template: "Loading..."
		});

		if (window.cordova) {
		    console.log("right before opening DB");
		    db = window.sqlitePlugin.openDatabase({name: "fee_populated.db", location: 'default',
		    createFromLocation: 1});
		    console.log("right after successfully opening DB");
		    $location.path("/students");
            $ionicLoading.hide();
		}else{
		    console.log("started creating websql");
		    db = openDatabase("websql.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
		    db.transaction(function (tx) {
                tx.executeSql("DROP TABLE IF EXISTS students");
                tx.executeSql("CREATE TABLE IF NOT EXISTS students (id integer primary key, first_name text, last_name text, gender text)");
		    });
		    $location.path("/app/students");
		    $ionicLoading.hide();
		}
	});

});

/*
app.controller("ConfigController", function($scope, $ionicPlatform){
    console.log("inside students controller");
    $scope.students = [];
    for (var i=0; i<4; i++){
        $scope.students.push({id: i, first_name: 'Manohar ' + i});
    }
});
*/
