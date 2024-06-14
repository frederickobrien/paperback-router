<script lang="ts">
	import InfoBar from '../components/InfoCard.svelte';
	import BookSelector from '../components/BookSelector.svelte';
	import type { Book } from '../data/interfaces/interfaces';
	import Map from '../components/Map.svelte';

	let activeBook: Book | null = null;
</script>

<svelte:head>
	<title>Paperback Router</title>
	<meta
		name="description"
		content="Follow the paths of fiction and nonfiction books routes across the globe."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header>
	<div class="selector">
		<h1>Paperback Router</h1>
		<BookSelector bind:activeBook />
	</div>
	{#if activeBook}
		<InfoBar {activeBook} />
	{/if}
</header>

<div class="map-container">
	<Map book={activeBook} />
</div>

<style>
	header {
		margin: 0;
		position: fixed;
		width: 25vw;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: #f0f0f0;
	}
	.selector {
		text-align: center;
	}
	.map-container {
		position: fixed;
		width: 75vw;
		height: 100vh;
		top: 0;
		right: 0;
	}
	h1 {
		font-size: 2em;
		font-weight: 400;
		margin: 2rem 0;
	}
</style>
