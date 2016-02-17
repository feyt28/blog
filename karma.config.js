'use strict';

module.exports = function ( config ) {
	config.set( {
		'basePath' : './',

		'frameworks' : [ 'mocha', 'chai', 'sinon' 'chai-sinon', 'jquery-chai' ],

		'files' : [
			'bower_components/angular/angular.min.js',
			'bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',

			'app/**/**/*.js',
			'app/**/**/.html'

		]
	} );
};
