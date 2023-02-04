<script>
	import Globe from '../components/globe.svelte';
	import aroundTheWorldInEightyDays from '../data/80-days.json';
	import tracks from '../data/tracks.json';
</script>

<header>
	<h1>Paperback Router</h1>
	<div><i>Around the World in 80 Days</i> by Jules Verne</div>
</header>

<Globe bookData={aroundTheWorldInEightyDays} />

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
