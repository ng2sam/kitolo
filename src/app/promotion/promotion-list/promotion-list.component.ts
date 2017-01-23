import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PromotionService } from '../../shared/services';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromotionListComponent implements OnInit {
  promotions: any;
  constructor(
    private _promotionService: PromotionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: { category: string }) => {
      if (params.category) {
        console.log("with param");
        this.promotions = this._promotionService.getPromotionByCategory(params.category)
      } else {
        this.promotions = this._promotionService.getPromotions();
         console.log("without param");
      }

    })
    // this.promotions = this._promotionService.getPromotions();
    console.log("ok lst");

    this.route.params
      /* .map(params => params['category'])
       .subscribe((cat: string) =>{
           if (cat){
             this._promotionService.getPromotionByCategory(cat)
           }else{
   
           }
       })*/
      .switchMap((params: Params) => this.promotions = this._promotionService.getPromotionByCategory(params['category']))
    // .do((promotion: any) => this.promotions = promotion);
  }

  select($event) {
    console.log($event);
  }

}
