( function () {
	'use strict';

	function sampleDirective () {
		function link () {

		}
		return {
			'templateUrl' : '/home/sample-directive.html',
			'link'        : link
		};
	}

	angular.module( 'app' )
		.directive( 'sampleDirective', sampleDirective );
} )( );