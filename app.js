var app= angular.module('TodoList',[]);


app.controller('addTaskController',function($scope){
	$scope.tasks = [];
	var taskData = localStorage['tasklist'];
	if(taskData !== undefined){
		$scope.tasks=JSON.parse(taskData);
	}

	$scope.searchEnter= function(){
		//console.log(event.which || event.KeyCode);
		if(event.which == 13 && $scope.task != '') {
			$scope.addTask();
		}
		$scope.addTask = function(){
			$scope.tasks.push({'taskMessage':$scope.task,'status':false});
			//console.log($scope.tasks);
			$scope.task ='';
			localStorage['tasklist'] = JSON.stringify($scope.tasks);
		};

		$scope.edit = function(msg){ 
			for(i=0;i<$scope.tasks.length;i++){
				if($scope.tasks[i].taskMessage == msg){
					$scope.tasks[i].taskMessage = event.target.innerText;

				}
			}
			localStorage['tasklist'] = JSON.stringify($scope.tasks);
			event.target.contentEditable= event.target.contentEditable == "false" ? "true" : "false";
			
		}

		$scope.enterAgain= function(msg){
			//console.log(msg);
			if(event.which == 13 && msg != '') {
				$scope.edit(msg);
			}
			//console.log("here")
		}
	};
});