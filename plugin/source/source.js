/**
 * Handels sources for slides.
 */
var RevealSource = (function() {

	function openSources() {
		var jsFileLocation = document.querySelector('script[src$="source.js"]').src;  // this js file path
		jsFileLocation = jsFileLocation.replace(/source\.js(\?.*)?$/, '');   // the js folder path

		// Fires when slide is changed
		Reveal.addEventListener( 'slidechanged', function( event ) {
			post('slidechanged');
		} );

		/**
		 * Posts the current slide source information to the source 
		 *
		 * @param {String} eventType Expecting 'slidechanged', 'fragmentshown' 
		 * or 'fragmenthidden' set in the events above to define the needed 
		 * slideDate.
		 */
		function post( eventType ) {
			var slideElement = Reveal.getCurrentSlide(),
				messageData;

			if( eventType === 'slidechanged' ) {
				var source = slideElement.querySelector( 'aside.source' );
				console.log(source);
			}
		}
	}

	// return { open: openNotes };
})();

console.log('source javascript');
