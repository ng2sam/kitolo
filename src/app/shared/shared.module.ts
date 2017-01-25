import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionService } from './services';
import { HeaderComponent } from './components';
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot()
  ],
  providers: [PromotionService],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class SharedModule { }
