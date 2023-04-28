<script>
	// @ts-nocheck

	export let activeBook;

	import aroundTheWorldInEightyDays from '../data/around-the-world-in-eighty-days.json';
	import tracks from '../data/tracks.json';
	import theGreatRailwayBazaar from '../data/the-great-railway-bazaar.json';
	import theAdventuresOfHuckleberryFinn from '../data/the-adventures-of-huckleberry-finn.json';
	import theGrapesOfWrath from '../data/the-grapes-of-wrath.json';
	import theTravelsOfMarcoPolo from '../data/the-travels-of-marco-polo.json';
	import donQuixote from '../data/don-quixote.json';
	import mobyDick from '../data/moby-dick.json';
	import journeyToTheWest from '../data/journey-to-the-west.json';
</script>

<label for="books">Choose a book:</label>
<select name="books" id="books" bind:value={activeBook}>
	<optgroup label="Fiction">
		<option value={aroundTheWorldInEightyDays}>Around the World in Eighty Days</option>
		<option value={donQuixote}>Don Quixote</option>
		<option value={journeyToTheWest}>Journey to the West</option>
		<option value={mobyDick}>Moby-Dick; Or, The Whale</option>
		<option value={theAdventuresOfHuckleberryFinn}>The Adventures of Huckleberry Finn</option>
		<option value={theGrapesOfWrath}>The Grapes of Wrath</option>
	</optgroup>
	<optgroup label="Nonfiction">
		<option value={theGreatRailwayBazaar}>The Great Railway Bazaar</option>
		<option value={theTravelsOfMarcoPolo}>The Travels of Marco Polo</option>
		<option value={tracks}>Tracks</option>
	</optgroup>
</select>
