<script lang="ts">
	import Globe from '../components/globe.svelte';
	import InfoBar from '../components/infoCard.svelte';
	import BookSelector from '../components/bookSelector.svelte';

	let activeBook: GeoJSON.Feature | null = null;
</script>

<svelte:head>
	<title>Paperback Router</title>
	<meta name="description" content="Follow the paths of fiction and nonfiction books routes across the globe." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header>
	<h1>Paperback Router</h1>
	<BookSelector bind:activeBook />
</header>

<Globe bookData={activeBook} />

{#if activeBook}
	<InfoBar {activeBook} />
{/if}

<style>
	header {
		margin: 0;
		position: fixed;
		width: 100%;
		text-align: center;
	}
	h1 {
		font-size: 2em;
		font-weight: 400;
		margin: 2rem 0;
	}
</style>
