export interface IPromotion {
    _id: string;
    productName: string;
    productCode: string;
    category: string;
    releaseDate: Date;
    endDate: Date;
    description: string;
    priceBase: string;
    contributor: string[];
    discount: number;
    minContributor: number;
    gallery: string[];
    thumbnail: string;
}
