import { IOverviewSlide, IProject, IPortfolio } from './../shared/interfaces';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../core/services/portfolio.service';
import { Observable } from 'rxjs';
declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioPageComponent implements OnInit, AfterViewInit {

  slide: IOverviewSlide =
  {
    "title": "My Work",
    "description": "Samplings of my professional and personal projects",
    "slidePath": "assets/images/SealRock_bg.jpg",
    "placement": "Center",
    "hasAdditionalInfo": false,
    "additionalInfo": "",
    "routerLink": ""
  }
  
  portfolioInfo$?: Observable<IPortfolio>;

  constructor(private portfolioService: PortfolioService) {
    this.portfolioInfo$ = this.portfolioService.getPortfolioInfo();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
  }
}
