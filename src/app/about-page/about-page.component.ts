import { IOverviewSlide, IAbout, IAtAGlanceMetrics } from './../shared/interfaces';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from '../core/services/portfolio.service';
declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, AfterViewInit {
  about$?: Observable<IAbout>;

  constructor(private portfolioService: PortfolioService) {
    this.about$ = this.portfolioService.getAboutInfo();
    // this.portfolioService.getTechnologyMetricsFromPortfolioStore()?.subscribe((s: IAtAGlanceMetrics) => {
    //   console.log("done");
    // });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
  }
}
