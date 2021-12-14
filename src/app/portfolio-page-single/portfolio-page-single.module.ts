import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortfolioSingleRoutingModule } from './portfolio-single-routing.module';

@NgModule({
  imports: [PortfolioSingleRoutingModule, CommonModule],
  declarations: [PortfolioSingleRoutingModule.components],
})
export class PortfolioPageSingleModule { }
