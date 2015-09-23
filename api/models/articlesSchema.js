'use strict';

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

module.exports = mongoose.model( 'Articles', new Schema( {
	'title'     : String,
	'timestamp' : String,
	'category'  : String
} ), 'articles' );