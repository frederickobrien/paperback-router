export type BookProperties = {
	name: string;
	author: string;
	year: number;
	description: string;
	coverLink?: string;
	bookType: BookType;
	gutenbergId?: number;
	libriVoxLink?: string;
};

type BookType = 'fiction' | 'non-fiction';
