<script>
	// @ts-nocheck

	export let bookData;
</script>

{#if bookData}
	<h2>{bookData.properties.name}</h2>
	<h3>{bookData.properties.author}</h3>
	<div>({bookData.properties.year})</div>
	{#if bookData.properties.gutenbergId}
		<a href={`https://www.gutenberg.org/ebooks/${bookData.properties.gutenbergId}`}>Gutenberg</a>
	{/if}
{/if}
