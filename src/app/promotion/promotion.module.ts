import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    PromotionRoutingModule
  ],
  declarations: [
    PromotionComponent,
    PromotionListComponent,
    CategoryComponent
  ],
  exports: [
    PromotionComponent,
    PromotionListComponent,
    CategoryComponent
    ]
})
export class PromotionModule { }
