import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HomeRoutingModule } from './home-routing.module';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';

@NgModule({
  imports: [ 
    HomeRoutingModule, 
    CommonModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]) 
  ],
  declarations: [ HomeRoutingModule.components ]
})
export class HomePageModule { }
