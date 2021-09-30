import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from '../portfolio.component';



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortRoutingModule
  ]
})
export class PortModule { }
