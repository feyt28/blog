'use strict';

var gulp  = require( 'gulp' );
var karma = require( 'karma' ).server;
var path  = require( 'path' );


gulp.task( 'test', function ( done ) {
	karma.start( {
		'configFile' : path.join( ___dirname, 'karma.config.js' )
		// 'configFile' : './karma.config.js'
	}, done );
} );
