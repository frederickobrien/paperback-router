<script lang="ts">
	export let activeBook: Book | null = null;

	import type { Book } from '../data/interfaces/interfaces';
	import bookData from '../data/enriched-data.json';

	const fictionBooks = bookData.filter((book) => book.bookDetails.bookType === 'fiction');
	const nonfictionBooks = bookData.filter((book) => book.bookDetails.bookType === 'non-fiction');
</script>

<label for="books">Choose a book:</label>
<select name="books" id="books" bind:value={activeBook}>
	<optgroup label="Fiction">
		{#each fictionBooks as book}
			<option value={book}>{book.bookDetails.name}</option>
		{/each}
	</optgroup>
	<optgroup label="Nonfiction">
		{#each nonfictionBooks as book}
			<option value={book}>{book.bookDetails.name}</option>
		{/each}
	</optgroup>
</select>
