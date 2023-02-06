<script>
	// @ts-nocheck

	import Globe from '../components/globe.svelte';
	import InfoBar from '../components/infoCard.svelte';
	import BookSelector from '../components/bookSelector.svelte';

	let activeBook = null;
</script>

<header>
	<h1>Paperback Router</h1>
	<BookSelector bind:activeBook />
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
