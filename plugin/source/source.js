/**
 * Handels sources for slides.
 */
var RevealSource = (function() {

	function openSources() {
		var jsFileLocation = document.querySelector('script[src$="source.js"]').src;  // this js file path
		jsFileLocation = jsFileLocation.replace(/source\.js(\?.*)?$/, '');   // the js folder path

		// Fires when slide is changed
		Reveal.addEventListener( 'slidechanged', function( event ) {
			post();
		} );

		/**
		 * Posts the current slide source information to the source 
		 */
		function post() {
			var slideElement = Reveal.getCurrentSlide(),
				messageData;

				var source = slideElement.querySelector( 'aside.source' );
				console.log(source);
			}
		}
	}

	// return { open: openNotes };
})();


