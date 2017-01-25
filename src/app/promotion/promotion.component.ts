import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PromotionService } from '../shared/services';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromotionComponent implements OnInit {
  promotions: any;
  constructor(
    private _promotionService: PromotionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.promotions = this._promotionService.getPromotions();
  this.route.params
    .switchMap((params: Params) => this._promotionService.getPromotionByCategory(params['category']))
    .do((promotion: any) => this.promotions = promotion);
  }

  select($event) {
    console.log($event);
  }

}
