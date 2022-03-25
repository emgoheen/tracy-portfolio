import { IPortfolio } from './../shared/interfaces';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getPortfolioData, PortfolioActions, State } from './state';

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
  portfolioInfo$?: Observable<IPortfolio>;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    // 1.  Dispatch the action
    this.store.dispatch(PortfolioActions.loadPortfolioData());

    // 2.  Select the state needed with a selector (in this case, getting the whole portfolio right now)
    this.portfolioInfo$ = this.store.select(getPortfolioData);
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
