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
				<a href={`https://www.gutenberg.org/ebooks/${bookData.properties.gutenbergId}`}
					>Download free from Project Gutenberg</a
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
		top: 5%;
		left: 5%;
		/* height: 100%; */
		padding: 3em;
		border-radius: 3rem;
		max-width: 20%;
	}
	.info-card-container * {
		padding: 0.3rem 0;
	}
</style>
