app.controller("PaymentsByDateController", function($scope, $ionicPlatform, $ionicLoading, $location, $filter, $stateParams, $cordovaSQLite){

    console.log("inside add PaymentsByDateController");
    $scope.payments = [];
    /*var query = "select students.first_name, students.last_name, payments.payment_date, payments.amount" +
                "from students, payments where payments.student_id = students.id";*/
    var query = "select students.first_name, students.last_name, payments.payment_date, payments.amount from payments inner join students on payments.student_id=students.id";

    $cordovaSQLite.execute(db, query, []).then(function(res){
        if(res.rows.length > 0){
            for(var i=0; i<res.rows.length; i++){
                console.log("row " + i + " is " + JSON.stringify(res.rows.item(i)));
                $scope.payments.push({date: new Date(res.rows.item(i).payment_date), amount: res.rows.item(i).amount,
                    fristname: res.rows.item(i).first_name, lastname: res.rows.item(i).last_name});
                console.log("after pushing " + JSON.stringify($scope.payments));
            }
        };
    }, function(error){
        console.error(JSON.stringify(error));
    });
});