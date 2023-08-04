export type Book = {
	bookDetails: BookDetails;
	geometryCollection: GeoJSON.GeometryCollection;
}

export type BookDetails = {
	name: string;
	author: string;
	year: number;
	description: string;
	coverLink?: string;
	bookType: BookType;
	gutenbergId?: number | null;
	libriVoxLink?: string | null;
};

type BookType = 'fiction' | 'non-fiction';