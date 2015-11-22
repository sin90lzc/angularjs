var apptest=angular.module("apptest",['ngRoute','controllerApp','tim_module']).
	config(function($routeProvider){
		$routeProvider.when("/index",{templateUrl:"./loginIndex.html",controller:"indexController"}).
		when("/index/:id",{templateUrl:"./loginIndex.html",controller:"indexController"}).
		when("/book/:id",{templateUrl:"./bookDetail.html",controller:"detailController"}).
		otherwise({
        redirectTo: '/index'
		});
	});