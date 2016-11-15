app.controller("PaymentsController", function($scope, $ionicPlatform, $ionicLoading, $location, $cordovaSQLite){
    console.log("inside PaymentsController");
    $scope.payments = [];
    var query = "SELECT * FROM payments"
    $cordovaSQLite.execute(db, query, []).then(function(res){
        if(res.rows.length > 0){
            for(var i=0; i<res.rows.length; i++){
                console.log("row " + i + " is " + JSON.stringify(res.rows.item(i)));
                $scope.payments.push({date: new Date(res.rows.item(i).date), amount: res.rows.item(i).amount});
                console.log("after pushing " + JSON.stringify($scope.payments));
            }
        };
    }, function(error){
        console.error(JSON.stringify(error));
    });
});