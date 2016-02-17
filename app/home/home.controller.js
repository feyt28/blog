( function () {
	'use strict';

	function HomeController ( $scope ) {
		function activate () {
			$scope.name = 'faith';
			console.log( 'here' );
		}

		activate();
	}

	angular.module( 'app' )
		.controller( 'HomeController', HomeController );


	HomeController.$inject = [ '$scope' ];


} )( );
