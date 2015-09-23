'use strict';

var Articles = require( './models/articlesSchema' );

module.exports = function ( app ) {
	app.get( '/articles', function ( req, res ) {
		Articles.find( function ( err, doc ) {
			if ( err ) {
				console.log( err );
			}
			res.json( doc );
		} );
	} );
};
