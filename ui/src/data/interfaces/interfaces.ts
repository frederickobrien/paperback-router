export type Book = {
    bookDetails: BookDetails;
    geometryCollection: GeoJSON.GeometryCollection;
}

export type BookDetails = {
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