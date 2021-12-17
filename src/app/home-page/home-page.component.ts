import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../core/services/portfolio.service';
import { IOverviewSlideDeck } from '../shared/interfaces';
declare function contentWayPoint(): void;
declare function sliderMain(): void;
declare function dropdown(): void;
declare function goToTop(): void;
declare function loaderPage(): void;
declare function counterWayPoint(): void;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor(private portfolioService: PortfolioService) {
    // portfolioService.getHomeSlideDeck().subscribe((overviewSlideDeck: IOverviewSlideDeck) => {
    //   console.log("Retrieved data values");
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
