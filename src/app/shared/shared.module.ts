import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionService } from './services';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PromotionService],
  declarations: [],
  exports:[]
})
export class SharedModule { }
