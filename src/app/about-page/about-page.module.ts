import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [ CommonModule, AboutRoutingModule ],
  declarations: [AboutRoutingModule.components],
})
export class AboutPageModule { }
