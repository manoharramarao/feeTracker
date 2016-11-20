app.controller("AddPaymentController", function($scope, $ionicPlatform, $ionicLoading, $location, $filter, $stateParams, $cordovaSQLite){

    console.log("inside add AddPaymentController controller");
    var studentId = $stateParams.studentId;
    $scope.payment = {};

    $scope.addPayment = function(){
        console.log("inside addPayment");
        var query1 = 'INSERT INTO payments (payment_date, amount, student_id) VALUES (?,?,?)';
        var query2 = 'UPDATE students SET last_updated = ? WHERE id = ? AND last_updated < ? or last_updated is null'
        /*db.transaction(function(tx){
            tx.executeSql(query, [$scope.payment.date, $scope.payment.amount, studentId], function(tx,res){
                console.log("successfully added");
            }, function(tx, error){
                console.log("error adding payment " + JSON.stringify(error));
            });
        }, function(error){
            console.log("error adding payment " + JSON.stringify(error));
        }, function(){
            console.log("successfully added");
            $location.path("/app/payments/"+studentId);
        });*/

        $cordovaSQLite.nestedExecute(db, query1, query2, [$scope.payment.date, $scope.payment.amount, studentId],
        [$scope.payment.date, studentId, $scope.payment.date]).then(function(res){
            console.log("successfully added");
            console.log("date is " + $scope.payment.date);
            $location.path("/app/payments/"+studentId);
        }, function(error){
            console.log("error adding payment " + JSON.stringify(error));
        });
    };

});