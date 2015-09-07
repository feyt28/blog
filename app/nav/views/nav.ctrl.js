( function () {
	'use strict';

	function NavController ( navFactory ) {
		function activate () {
			console.log( 'activated' );
			navFactory.getNavLinks();
		}

		activate();
	}

	angular.module( 'app.nav' )
		.controller( 'NavController', NavController );

	NavController.$inject = [ 'navFactory' ];
} )( );