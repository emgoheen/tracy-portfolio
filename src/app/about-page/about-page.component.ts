import { IAbout } from './../shared/interfaces';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AboutActions, getAboutData, State } from './state';

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

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // This is a way to test the subject/observable pattern
    // before integrating it into an effect.
    // this.service.getPortfolioObs().subscribe(portfolio => {
    //   console.log("We got it!");
    // })

    // 1.  Dispatch the action
    this.store.dispatch(AboutActions.loadAboutData());

    // 2.  Select the state needed with a selector (in this case, getting the whole portfolio right now)
    this.about$ = this.store.select(getAboutData);
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
