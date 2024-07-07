<script lang="ts">
	import type { Book } from '../data/interfaces/interfaces';
	export let activeBook: Book;

	$: bookProperties = activeBook.bookDetails;
</script>

<div class="info-card-container">
	<div class="card-header">
		<div class="book-cover">
			<img src={bookProperties.coverLink} alt={`Book cover of ${bookProperties.name}`} />
		</div>
		<div class="book-details">
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
		display: flex;
		flex-direction: column;
		gap: 2rem;
		border-radius: 2rem;
		line-height: 150%;
		text-align: left;
		padding: 3rem;
	}
	.card-header {
		display: flex;
		gap: 2rem;
	}
	.book-cover {
		flex: 1;
		box-shadow: 24px 16px 64px 0 rgba(0, 0, 0, 0.08);
		border-radius: 2px;
	}
	.book-details {
		flex: 3;
	}
</style>
