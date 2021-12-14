import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [ CommonModule, HomeRoutingModule ],
  declarations: [ HomeRoutingModule.components ]
})
export class HomePageModule { }
