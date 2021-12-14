import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const app_routes: Routes = [
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule) },
  { path: 'portfolio', loadChildren: () => import('./portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule)},
  { path: 'portfolio/:id', loadChildren: () => import('./portfolio-page-single/portfolio-page-single.module').then(m => m.PortfolioPageSingleModule)},
  { path: 'timeline', loadChildren: () => import('./timeline-page/timeline.module').then(m => m.TimelineModule)},
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // catch any unfound routes and redirect to home page
];


@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
