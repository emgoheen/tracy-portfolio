import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AboutRoutingModule } from './about-routing.module';
import { PortfolioEffects } from './state/about.effects';
import { aboutReducer } from './state/about.reducer';

@NgModule({
  imports: [ 
    CommonModule, 
    AboutRoutingModule,
    StoreModule.forFeature('portfolio', aboutReducer),
    EffectsModule.forFeature([PortfolioEffects])
   ],
  declarations: [AboutRoutingModule.components],
})
export class AboutPageModule { }
