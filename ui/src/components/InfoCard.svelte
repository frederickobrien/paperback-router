<script lang="ts">
	import type { Book } from '../data/interfaces/interfaces';
	export let activeBook: Book;

	$: bookProperties = activeBook.bookDetails;
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
	<div>
		<p>{bookProperties.description}</p>
	</div>
</div>

<style>
	.info-card-container {
		padding: 3em;
		border-radius: 2rem;
		line-height: 150%;
		text-align: left;
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
