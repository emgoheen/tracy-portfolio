import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineRoutingModule } from './timeline-routing.module';
import { StoreModule } from '@ngrx/store';
import { timelineReducer } from './state/timeline.reducer';
import { TimelineEffects } from './state/timeline.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  imports: [
    CommonModule,
    TimelineRoutingModule,
    StoreModule.forFeature('timeline', timelineReducer),
    EffectsModule.forFeature([TimelineEffects])
  ],
  declarations: [TimelineRoutingModule.components]

})
export class TimelineModule { }
