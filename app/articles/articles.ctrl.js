( function () {
	'use strict';

	function ArticlesController ( ) {
		var self = this;

		function activate () {
			console.log( 'activate' );
		}

		activate();
	}

	angular.module( 'app.articles' ).controller( 'ArticlesController', ArticlesController );
} )( );
