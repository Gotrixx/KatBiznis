/* KatBizniss
 *
 * main script for KatBiznisss
 *
 * coded by Gotrixx
 * started at 09/02/2017
 */

 const $main = document.querySelector( "main" );

 document.querySelector( "nav a" ).addEventListener( "click", function( oEvent ) {
 	oEvent.preventDefault();
 	$main.classList.toggle( "flipped" );
 } );
 