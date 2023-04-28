export type BookProperties = {
	name: string;
	author: string;
	year: number;
	description: string;
	namedLocations: string[];
	coverLink?: string;
	bookType: BookType;
	gutenbergId?: number;
	libriVoxLink?: string;
};

type BookType = 'fiction' | 'non-fiction';

type BookCoordinateObject = {
	lat: number;
	lng: number;
	location: string;
	passage: string;
}