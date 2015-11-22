var controllerApp=angular.module("controllerApp",[]).
	controller("indexController",["$scope","$http","$routeParams","$httpParamSerializerJQLike",function($scope,$http,$routeParams,$httpParamSerializerJQLike){
		$scope.isLogin=false;
		console.log("indexController")
		var loginHandler=function(id){
				if(!id){
					id=$routeParams.id
				}
				$http.post("http://192.168.1.14:8080/mvc_zero_config/cors/isLogin",{id:id},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(data){
					$scope.isLogin=data.status;
					$scope.username=data.user;
					if($scope.isLogin){
						$http.post("http://192.168.1.14:8080/mvc_zero_config/cors/getBookList").success(function(data){
							$scope.bookList=data;
						});
					}
				});
			}
			//if($routeParams&&$routeParams.id){
				console.log($routeParams.id)
				loginHandler();
			//}
			$scope.login=loginHandler;
		
	}]).
	controller("detailController",["$scope","$http","$routeParams","$httpParamSerializerJQLike",function($scope,$http,$routeParams,$httpParamSerializerJQLike){
			console.log($routeParams.id)
			$http.post("http://192.168.1.14:8080/mvc_zero_config/cors/getBookDetail",{id:$routeParams.id},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(data){
				$scope.bookId=data.id;
				$scope.bookName=data.name;
		});
	}]);