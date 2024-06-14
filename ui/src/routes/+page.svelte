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

<div class="container">
	<div class="header">
		<header>
			<h1>Paperback Router</h1>
			<BookSelector bind:activeBook />
		</header>
	</div>
	<div class="map">
		<div class="map-container">
			<Map book={activeBook} />
		</div>
	</div>
	<div class="info">
		{#if activeBook}
			<InfoBar {activeBook} />
		{/if}
	</div>
</div>

<style>
	header {
		margin: 0;
		padding-bottom: 3rem;
		text-align: center;
	}
	h1 {
		font-size: 1.6em;
		font-weight: 400;
		margin: 2rem 0;
	}
	@media (min-width: 1024px) {
		.container {
			display: grid;
			grid-template-columns: 1fr 3fr;
			grid-template-rows: 15% auto;
			gap: 0px 0px;
			grid-auto-flow: row;
			grid-template-areas:
				'header map'
				'info map';
		}

		.header {
			grid-area: header;
		}

		.map {
			grid-area: map;
		}

		.info {
			grid-area: info;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
</style>
