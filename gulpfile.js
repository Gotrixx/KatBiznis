/* KatBizniss
 *
 * Gulp tasks
 *
 * coded by Gotrixx
 * started at 09/02/2017
 */

var gulp = require( "gulp" ),
	image = require( "gulp-image" );

// --- Task for images
gulp.task( "images", function() {
	gulp.src( "src/img/**" )
		.pipe( image() )
		.pipe( gulp.dest( "assets/img" ) );
} );

// --- Task for styles

// --- Task for pug

// --- Task for js

// --- Watch tasks

// --- Aliases
