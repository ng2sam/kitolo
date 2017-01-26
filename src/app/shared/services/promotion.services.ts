import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IPromotion, Promotion } from '../model';

@Injectable()
export class PromotionService {
    private _promotionUrl = 'https://kitolo.herokuapp.com/promotions';

    constructor(private _http: Http) {}

    getPromotions(): Observable<Promotion[]> {
        return this._http.get(this._promotionUrl)
            .map((response: Response) =>  response.json())
            //.map((promotion: IPromotion) => new Promotion(promotion))
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPromotion(id: string): Observable<IPromotion> {
        return this.getPromotions()
            .map((promotions: IPromotion[]) => promotions.find(p => p._id === id))
           // .map((promotion: IPromotion) => new Promotion(promotion))
            .do(data => console.log('ONE: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPromotionByCategory(category: string): Observable<Promotion[]> {
        return this.getPromotions()
            .map((promotions: IPromotion[]) => promotions.filter(p => p.category === category))
           // .map((promotion: IPromotion) => new Promotion(promotion))
            .do(data => console.log('ONE: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}