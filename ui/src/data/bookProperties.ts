export type BookProperties = {
	name: string;
	author: string;
	year: number;
	bookType: BookType;
	gutenbergId: number | null;
};

type BookType = 'fiction' | 'non-fiction';
