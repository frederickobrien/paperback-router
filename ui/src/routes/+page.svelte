<script>
	// @ts-nocheck

	import Globe from '../components/globe.svelte';
	import aroundTheWorldInEightyDays from '../data/around-the-world-in-eighty-days.json';
	import tracks from '../data/tracks.json';
	import railwayBazaar from '../data/the-great-railway-bazaar.json';
	import huckFinn from '../data/the -adventures-of-huckleberry-finn.json';
	import theGrapesOfWrath from '../data/the-grapes-of-wrath.json';
	import marcoPolo from '../data/the-travels-of-marco-polo.json';
	import donQuixote from '../data/don-quixote.json';
	import mobyDick from '../data/moby-dick.json';
	import journeyToTheWest from '../data/journey-to-the-west.json';
	import InfoBar from '../components/infoCard.svelte';

	let activeBook = null;
</script>

<header>
	<h1>Paperback Router</h1>
	<!-- <div><i>Around the World in 80 Days</i> by Jules Verne</div> -->
	<button on:click={() => (activeBook = aroundTheWorldInEightyDays)}
		>Around the World in Eighty Days</button
	>
	<button on:click={() => (activeBook = tracks)}>Tracks</button>
	<button on:click={() => (activeBook = railwayBazaar)}>The Great Railway Bazaar</button>
	<button on:click={() => (activeBook = huckFinn)}>The Adventures of Huckleberry Finn</button>
	<button on:click={() => (activeBook = theGrapesOfWrath)}>The Grapes of Wrath</button>
	<button on:click={() => (activeBook = marcoPolo)}>The Travels of Marco Polo</button>
	<button on:click={() => (activeBook = donQuixote)}>Don Quixote</button>
	<button on:click={() => (activeBook = mobyDick)}>Moby-Dick</button>
	<button on:click={() => (activeBook = journeyToTheWest)}>Journey to the West</button>
	<button on:click={() => (activeBook = null)}>Clear</button>
</header>

<Globe bookData={activeBook} />

{#if activeBook}
	<InfoBar bookData={activeBook} />
{/if}

<style>
	header {
		margin: 1em 0;
		position: fixed;
		width: 100%;
		text-align: center;
	}
	h1 {
		font-size: 2em;
		font-weight: 400;
	}
</style>
