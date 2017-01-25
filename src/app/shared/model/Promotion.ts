import { IPromotion } from './IPromotion';


export class Promotion implements IPromotion {
    _id: string = null;
    productName: string = null;
    productCode: string = null;
    category: string = null;
    releaseDate: Date = null;
    endDate: Date = null;
    description: string = null;
    priceBase: string = null;
    contributor: string[] = null;
    discount: number = null;
    minContributor: number = null;
    gallery: string[] = null;
    thumbnail: string = null;

    constructor(promotion: IPromotion) { 
        this._id = promotion._id;
        this.category = promotion.category;
        this.contributor = promotion.contributor;
        this.description = promotion.description;
        this.discount = promotion.discount;
        this.endDate = promotion.endDate;
        this.gallery = promotion.gallery;
        this.minContributor = promotion.minContributor;
        this.priceBase = promotion.priceBase;
        this.productCode = promotion.productCode;
        this.productName = promotion.productName;
        this.releaseDate = promotion.releaseDate;
        this.thumbnail = promotion.thumbnail;
    }

    getMissingContributorCount(): number{
        let nbContrib = this.contributor.length;
        return this.minContributor - nbContrib;
    }

}