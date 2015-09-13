'use strict';

var express        = require( 'express' );
var app            = express();
var morgan         = require( 'morgan' );
var mongoose       = require( 'mongoose' );
var bodyParser     = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var db             = require( './config/config' );

mongoose.connect( db.url , function ( err ) {
	if ( err ) {
		console.log( err );
	} else {
		console.log( 'Connection successful' );
	}
} );

var port = process.env.PORT || 8005;

app.use( bodyParser.json() );

// parse application/vnd.api+json as json
app.use( bodyParser.json( { type: 'application/vnd.api+json' } ) );

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: true } ) );

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use( methodOverride( 'X-HTTP-Method-Override' ) );


app.use( express.static( 'app' ) );
app.use( morgan( 'dev' ) );
app.use( '/bower_components', express.static( 'bower_components' ) );
app.use( '/api', express.static( 'api' ) );

require( './api/nav.api' )( app );

app.listen( port );

console.log( 'Listening to port 8005' );
