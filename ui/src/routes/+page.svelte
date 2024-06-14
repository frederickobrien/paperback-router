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

<main>
	<header>
		<h1>Paperback Router</h1>
		<BookSelector bind:activeBook />
		{#if activeBook}
			<div class="desktop-info-bar">
				<InfoBar {activeBook} />
			</div>
		{/if}
	</header>

	<div class="map-container">
		<Map book={activeBook} />
	</div>
	{#if activeBook}
		<div class="mobile-info-bar">
			<InfoBar {activeBook} />
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
	header {
		margin: 0;
		padding-bottom: 3rem;
		background-color: #f0f0f0;
		text-align: center;
	}
	h1 {
		font-size: 2em;
		font-weight: 400;
		margin: 2rem 0;
	}
	.desktop-info-bar {
		display: none;
	}
	@media (min-width: 1024px) {
		header {
			position: fixed;
			width: 25vw;
			height: 100vh;
			top: 0;
			left: 0;
		}
		.map-container {
			position: fixed;
			width: 75vw;
			height: 100vh;
			top: 0;
			right: 0;
		}
		.desktop-info-bar {
			display: block;
		}
		.mobile-info-bar {
			display: none;
		}
	}
</style>
