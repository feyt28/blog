( function () {
	'use strict';

	function navFactory () {

		function getNavLinks () {
			console.log( 'getNavLinks in factory' );
		}

		var navMethods = {
			'getNavLinks' : getNavLinks // TODO: must be invoked since it will be a method for getting data
		};

		return navMethods;
	}
	angular.module( 'app.nav' ).factory( 'navFactory', navFactory );
} )( );