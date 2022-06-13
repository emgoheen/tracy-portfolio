import { NgModule } from '@angular/core';
import { Routes, RouterModule, TitleStrategy } from '@angular/router';
import { PortfolioTitlePageStrategy } from './core/services/title-strategy.service';

const app_routes: Routes = [
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule), title: "Portfolio Home" },
  { path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule), title: "Portfolio About" },
  { path: 'portfolio', loadChildren: () => import('./portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule), title: "Portfolio Collection"},
  { path: 'portfolio/:id', loadChildren: () => import('./portfolio-page-single/portfolio-page-single.module').then(m => m.PortfolioPageSingleModule), title: "Portfolio Sample"},
  { path: 'timeline', loadChildren: () => import('./timeline-page/timeline.module').then(m => m.TimelineModule), title: "Portfolio Timeline"},
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // catch any unfound routes and redirect to home page
];


@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
  providers: [{provide: TitleStrategy, useClass: PortfolioTitlePageStrategy}]
})
export class AppRoutingModule { }
