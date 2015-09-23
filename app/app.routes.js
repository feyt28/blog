( function () {
	'use strict';

	function config ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state( 'home', {
				'url'         : '/',
				'templateUrl' : '/home/home.html'
			} )
			.state( 'articles', {
				'url'          : '/articles',
				'templateUrl'  : '/articles/views/articles.html',
				'controller'   : 'ArticlesController',
				'controllerAs' : 'vm'
			} )
			.state( 'about', {
				'url'         : '/about',
				'templateUrl' : '/about/about.html'
			} );
	}

	angular
		.module( 'app.routes', [ ] )
		.config( config );
} )( );
