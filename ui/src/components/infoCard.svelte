<script lang="ts">
	import type { BookProperties } from '../types/bookProperties';
	export let bookData: GeoJSON.Feature;

	let bookProperties = bookData.properties as BookProperties;
</script>

<div class="info-card-container">
	<div style="display: flex; gap: 2rem;">
		<div style="flex: 1;">
			<img
				class="book-cover"
				src={bookProperties.coverLink}
				alt={`Book cover of ${bookProperties.name}`}
			/>
		</div>
		<div style="flex: 2;">
			<h2>{bookProperties.name}</h2>
			<h3>{bookProperties.author}</h3>
			<p>{bookProperties.year}</p>
			{#if bookProperties.gutenbergId}
				<p>
					<a
						href={`https://www.gutenberg.org/ebooks/${bookProperties.gutenbergId}`}
						target="_blank"
						rel="noreferrer">Read at Project Gutenberg</a
					>
				</p>
			{/if}
			{#if bookProperties.libriVoxLink}
				<p>
					<a href={bookProperties.libriVoxLink} target="_blank" rel="noreferrer"
						>Listen at LibriVox</a
					>
				</p>
			{/if}
		</div>
	</div>
	<p>{bookProperties.description}</p>
</div>

<style>
	.info-card-container {
		position: fixed;
		top: 5%;
		left: 5%;
		/* height: 100%; */
		padding: 3em;
		border-radius: 3rem;
		max-width: 30%;
	}
	.info-card-container * {
		padding: 0.3rem 0;
	}
	.book-cover {
		transform: perspective(1000px) rotateX(4deg) rotateY(-16deg) rotateZ(4deg);
		box-shadow: 24px 16px 64px 0 rgba(0, 0, 0, 0.08);
		border-radius: 2px;
	}
</style>
