app.controller("ConfigController", function($scope, $ionicPlatform, $ionicLoading, $location, $ionicHistory, $cordovaSQLite){
	console.log("inside ConfigController");

$ionicHistory.nextViewOptions({
		disableAnimate: true,
		disableBack: true
	});

	$ionicPlatform.ready(function(){
		$ionicLoading.show({
			template: "Loading..."
		});

		/*if (window.cordova) {
		    console.log("right before opening DB");
		    db = window.sqlitePlugin.openDatabase({name: "fee_populated.db", location: 'default',
		    createFromLocation: 1});
		    console.log("right after successfully opening DB");
		    $location.path("/app/students");
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
		}*/

		if(window.cordova){
		    window.plugins.sqlDB.copy("fee_populated.db", 0, function(){
                console.log("finished copying DB");
                db = $cordovaSQLite.openDB({name: 'fee_populated.db', iosDatabaseLocation: 'default'});
                $location.path("/app/students");
                $ionicLoading.hide();
            }, function(error){
                console.error("error copying DB " + JSON.stringify(error));
                db = $cordovaSQLite.openDB({name: 'fee_populated.db', iosDatabaseLocation: 'default'});
                console.log("finished copying DB");
                $location.path("/app/students");
                $ionicLoading.hide();
            });
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
