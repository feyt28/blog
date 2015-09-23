( function () {
	'use strict';

	var stubData = [ {
		'title'     : 'stubbed title',
		'timestamp' : 'date',
		'category'  : 'category'
	} ];

	function articlesFactory ( $http ) {
		function getArticles () {
			return $http.get( 'http://localhost:8005/articles' )
				.success( function ( res )  {
					// uncomment this when there is data available
					// return res;

					return stubData;
				} )
				.error( function ( err ) {
					console.log( err );
				} );
		}

		var articlesMethods = {
			'getArticles' : getArticles
		};

		return articlesMethods;
	}

	angular.module( 'app.articles' ).factory( 'articlesFactory', articlesFactory );

	articlesFactory.$inject = [ '$http' ];
} )( );