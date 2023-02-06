<script>
	// @ts-nocheck

	export let bookData;
</script>

<div class="info-card-container">
	{#if bookData}
		<h2>{bookData.properties.name}</h2>
		<h3>{bookData.properties.author}</h3>
		<p>{bookData.properties.year}</p>
		{#if bookData.properties.gutenbergId}
			<p>
				<a href={`https://www.gutenberg.org/ebooks/${bookData.properties.gutenbergId}`}>Gutenberg</a
				>
			</p>
		{/if}
		{#if bookData.properties.description}
			<p>{bookData.properties.description}</p>
		{/if}
	{/if}
</div>

<style>
	.info-card-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 30%;
		height: 100%;
		background-color: #fff;
		padding: 1em;
	}
</style>
