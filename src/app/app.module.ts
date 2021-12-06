import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { PortfolioPageSingleComponent } from './components/portfolio-page-single/portfolio-page-single.component';
import { TimelinePageComponent } from './components/timeline-page/timeline-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'portfolio', component: PortfolioPageComponent},
  { path: 'portfolio/:id', component: PortfolioPageSingleComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'timeline', component: TimelinePageComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    PortfolioPageSingleComponent,
    TimelinePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
