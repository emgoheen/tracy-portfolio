import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [ CommonModule, PortfolioRoutingModule ],
  declarations: [ PortfolioRoutingModule.components]
})
export class PortfolioPageModule { }
