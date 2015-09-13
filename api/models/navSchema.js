'use strict';

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

module.exports = mongoose.model( 'Nav', new Schema( {
	'title' : String
} ), 'nav' );
