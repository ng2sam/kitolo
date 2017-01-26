import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { HomeModule } from './home/home.module';
import { PromotionModule } from './promotion/promotion.module';
import {  } from './shared/shared.module';
import { HeaderComponent } from './components';
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
  imports: [RouterModule.forRoot(routes), CollapseModule.forRoot()],
  declarations:[HeaderComponent],
  exports: [RouterModule, CollapseModule, HeaderComponent],
  providers: []
})
export class AppRoutingModule { }