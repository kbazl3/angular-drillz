angular.module("arrayApp").controller("arrayController", function ($scope, quoteService){

	$scope.getData = quoteService.getData();

	});