( function () {
	'use strict';

	function navFactory ( $http ) {

		function getNavLinks () {

			return $http.get( 'http://localhost:8005/nav' )
				.success( function ( res ) {
					return res;
				} )
				.error( function ( err ) {
					console.log( err );
				} );
		}

		var navMethods = {
			'getNavLinks' : getNavLinks
		};

		return navMethods;
	}
	angular.module( 'app.nav' ).factory( 'navFactory', navFactory );

	navFactory.$inject = [ '$http' ];
} )( );
