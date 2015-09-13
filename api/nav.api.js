'use strict';

var Nav = require( './models/navSchema' );

module.exports = function  ( app ) {
	app.get( '/nav', function ( req, res ) {
		Nav.find( function ( err, doc ) {
			if ( err ) {
				console.log( err );
			}

			res.json( doc );
		} );
	} );
};
