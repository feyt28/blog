( function () {
	'use strict';

	function NavController ( $scope, navFactory ) {
		var self = this;

		function activate () {
			navFactory.getNavLinks().then( function ( res ) {
				self.nav = res.data;
			} );
		}

		activate();
	}

	angular.module( 'app.nav' )
		.controller( 'NavController', NavController );

	NavController.$inject = [ '$scope', 'navFactory' ];
} )( );
