import { IAtAGlanceMetrics } from './../shared/interfaces';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ChangeDetectorRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from '../core/services/portfolio.service';
import { IOverviewSlide } from '../shared/interfaces';
declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, AfterViewInit {

  slides: IOverviewSlide[] = [
    {
      "slideInfo": {
        "slideTitle": "Emily Tracy",
        "slideDescription": "Creating user interfaces for over 20 years",
        "slidePath": "assets/images/Lighthouse_bg_1_grayscale.jpg"
      },
      "placement": "Left",
      "hasAdditionalInfo": false,
      "additionalInfo": "",
      "routerLink": ""
    },
    {
      "slideInfo": {
        "slideTitle": "About Me",
        "slideDescription": "Explore my education and career",
        "slidePath": "assets/images/AboutMe_bg.jpg",
      },
      "placement": "Center",
      "hasAdditionalInfo": true,
      "additionalInfo": "LEARN MORE",
      "routerLink": "/about"
    },
    {
      "slideInfo": {
        "slideTitle": "My Work",
        "slideDescription": "Samplings of my professional and personal projects",
        "slidePath": "assets/images/MyWork_bg.jpg",
      },
      "placement": "Center",
      "hasAdditionalInfo": true,
      "additionalInfo": "VIEW MORE",
      "routerLink": "/portfolio"
    },
    {
      "slideInfo": {
        "slideTitle": "Timeline",
        "slideDescription": "A visual history of my credentials",
        "slidePath": "assets/images/Footsteps_bg.jpg",
      },
      "placement": "Left",
      "hasAdditionalInfo": true,
      "additionalInfo": "VIEW MORE",
      "routerLink": "/timeline"
    }
  ]

  metricsAtAGlance$?: Observable<IAtAGlanceMetrics>;

  constructor(private portfolioService: PortfolioService) {
    this.metricsAtAGlance$ = this.portfolioService.getTechnologyMetrics();
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
