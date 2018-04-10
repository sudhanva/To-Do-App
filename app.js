var app= angular.module('TodoList',[]);


app.controller('addTaskController',function($scope){
	$scope.tasks = [];

	$scope.searchEnter= function(){
		//console.log(event.which || event.KeyCode);
		if(event.which == 13 && $scope.task != '') {
			$scope.addTask();
		}
		$scope.addTask = function(){
			$scope.tasks.push({'taskMessage':$scope.task,'status':false});
			console.log($scope.tasks);
			$scope.task ='';
		};
	};
});