var app= angular.module('TodoList',[]);


app.controller('addTaskController',function($scope){
	$scope.searchEnter= function(){
		console.log(event.which || event.KeyCode);
		if(event.which == 13){
			$scope.addTask();
		}
		$scope.addTask = function(){

		};
	};
});