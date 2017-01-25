import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { PromotionModule } from './promotion/promotion.module';

export function loadPromotionModule() { return PromotionModule; }
export function loadHomeModule() { return HomeModule; }

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: loadHomeModule
  },
  {
    path: 'promotion',
    loadChildren: loadPromotionModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }