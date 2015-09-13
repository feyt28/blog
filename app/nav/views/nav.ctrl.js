( function () {
	'use strict';

	function NavController ( $scope, navFactory ) {
		function activate () {
			console.log( 'activated' );
			navFactory.getNavLinks().then( function ( res ) {
				$scope.nav = res.data;
			} );
		}

		activate();
	}

	angular.module( 'app.nav' )
		.controller( 'NavController', NavController );

	NavController.$inject = [ '$scope', 'navFactory' ];
} )( );
