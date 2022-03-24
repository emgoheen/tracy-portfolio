import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PortfolioSingleRoutingModule } from './portfolio-single-routing.module';
import { ProjectEffects } from './state/project.effects';
import { projectReducer } from './state/project.reducer';

@NgModule({
  imports: [
    PortfolioSingleRoutingModule, 
    CommonModule,
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([ProjectEffects])
  ],
  declarations: [PortfolioSingleRoutingModule.components],
})
export class PortfolioPageSingleModule { }
