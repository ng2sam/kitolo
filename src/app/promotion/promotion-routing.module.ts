import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionComponent } from './promotion.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '',
    component: PromotionComponent
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'category/:category',
    component: PromotionListComponent
  },
  {
    path: ':id',
    component: PromotionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PromotionRoutingModule { }