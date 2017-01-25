import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { CategoryComponent } from './category/category.component';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PromotionRoutingModule
  ],
  declarations: [
    PromotionComponent,
    PromotionListComponent,
    CategoryComponent,
    PromotionDetailComponent
  ],
  exports: [
    PromotionComponent,
    PromotionListComponent,
    CategoryComponent,
    PromotionDetailComponent
    ]
})
export class PromotionModule { }
