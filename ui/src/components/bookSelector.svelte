<script lang="ts">
	export let activeBook: Book | null = null;
	
	import type { Book } from '../data/interfaces/interfaces';

	import aroundTheWorldInEightyDays from '../data/books/around-the-world-in-eighty-days.json';
	import donQuixote from '../data/books/don-quixote.json';
	import journeyToTheWest from '../data/books/journey-to-the-west.json';
	import mobyDick from '../data/books/moby-dick.json';
	import theAdventuresOfHuckleberryFinn from '../data/books/the-adventures-of-huckleberry-finn.json';
	import theGrapesOfWrath from '../data/books/the-grapes-of-wrath.json';
	import theGreatRailwayBazaar from '../data/books/the-great-railway-bazaar.json';
	import theTravelsOfMarcoPolo from '../data/books/the-travels-of-marco-polo.json';
	import tracks from '../data/books/tracks.json';

</script>

<label for="books">Choose a book:</label>
<select name="books" id="books" bind:value={activeBook}>
	<optgroup label="Fiction">
		
		<option value={aroundTheWorldInEightyDays}>{aroundTheWorldInEightyDays.bookDetails.name}</option>
		<option value={donQuixote}>{donQuixote.bookDetails.name}</option>
		<option value={journeyToTheWest}>{journeyToTheWest.bookDetails.name}</option>
		<option value={mobyDick}>{mobyDick.bookDetails.name}</option>
		<option value={theAdventuresOfHuckleberryFinn}>{theAdventuresOfHuckleberryFinn.bookDetails.name}</option>
		<option value={theGrapesOfWrath}>{theGrapesOfWrath.bookDetails.name}</option>
	</optgroup>
	<optgroup label="Nonfiction">
		<option value={theGreatRailwayBazaar}>{theGreatRailwayBazaar.bookDetails.name}</option>
		<option value={theTravelsOfMarcoPolo}>{theTravelsOfMarcoPolo.bookDetails.name}</option>
		<option value={tracks}>{tracks.bookDetails.name}</option>
	</optgroup>
</select>
