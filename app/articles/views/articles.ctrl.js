( function () {
	'use strict';

	function ArticlesController ( articlesFactory ) {
		var self = this;

		function activate () {
			console.log( 'activate' );
			articlesFactory.getArticles().then( function ( res ) {
				self.articlesCollection = res.data;
				console.log( res.data )
			} );
		}

		activate();
	}

	angular.module( 'app.articles' ).controller( 'ArticlesController', ArticlesController );

	ArticlesController.$inject = [ 'articlesFactory' ];
} )( );
