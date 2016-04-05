var app = angular.module("todo", []);
app.controller("appControl", function ($scope){
	$scope.newCount = 0;
	$scope.toDoCount = 0;
	$scope.completedCount = 0;

	$scope.todos = [];
	$scope.completedToDos = [];

	$scope.addToDo = function (newtodo) {
		console.log('test');
		$scope.todos.push(newtodo);
	};

	$scope.completeToDo = function (completedToDo) {
		$scope.completedToDos.push(completedToDo);
		var place = parseInt($scope.todos.indexOf(completedToDo));
		$scope.todos.splice(place, 1);
	};
});