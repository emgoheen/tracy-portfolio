import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioEffects } from './state/portfolio.effects';
import { portfolioReducer } from './state/portfolio.reducer';

@NgModule({
  imports: [ 
    CommonModule, 
    PortfolioRoutingModule,
    StoreModule.forFeature('portfolio', portfolioReducer),
    EffectsModule.forFeature([PortfolioEffects])
  ],
  declarations: [ PortfolioRoutingModule.components]
})
export class PortfolioPageModule { }
