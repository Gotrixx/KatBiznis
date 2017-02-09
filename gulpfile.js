/* KatBizniss
 *
 * Gulp tasks
 *
 * coded by Gotrixx
 * started at 09/02/2017
 */

var gulp = require( "gulp" ),
	image = require( "gulp-image" ),
	pug = require( "gulp-pug" );

// --- Task for images
gulp.task( "images", function() {
	gulp.src( "src/img/**" )
		.pipe( image() )
		.pipe( gulp.dest( "assets/img" ) );
} );

// --- Task for pug
gulp.task( "html", function() {
	gulp.src( "src/pug/**/*.pug" )
		.pipe( pug( {} ) )
		.pipe( gulp.dest( "." ) );
} );

// --- Task for styles

// --- Task for js

// --- Watch tasks

// --- Aliases
