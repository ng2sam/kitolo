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
    wow: any;
		
  constructor(
    private _promotionService: PromotionService,
    private route: ActivatedRoute,
    private router: Router) {
    


     }

  ngOnInit() {
    this.route.params.subscribe((params: { category: string }) => {
      if (params.category) {
        this.promotions = this._promotionService.getPromotionByCategory(params.category)
      } else {
        this.promotions = this._promotionService.getPromotions();
      }
    });

  
  }

  select($event) {
    console.log($event);
  }

}
