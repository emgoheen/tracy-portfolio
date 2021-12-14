import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioPageSingleComponent } from './portfolio-page-single.component';

const routes: Routes = [
  { path: '', component: PortfolioPageSingleComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PortfolioSingleRoutingModule {
  static components = [ PortfolioPageSingleComponent ];
}
